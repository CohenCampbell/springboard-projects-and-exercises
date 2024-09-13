from flask import Flask, render_template, redirect, request
from models import db, connect_db, Pet
from forms import AddPetForm

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///adopt'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['SECRET_KEY'] = "Sun"

connect_db(app)
db.create_all()

@app.route("/")
def homepage():
    pets = Pet.query.all()
    return render_template("homepage.html", pets=pets)

@app.route("/add")
def add():
    form = AddPetForm()
    return render_template("add.html", form=form)

@app.route("/add/formdata", methods=["GET"])
def formdata_add():
    return redirect("/")

@app.route("/add/formdata", methods=["POST"])
def formdata_post():

    form = AddPetForm()
    try:
        if form.validate_on_submit():
            name = form.name.data
            species = form.species.data
            photo_url = form.photo_url.data
            age = form.age.data
            notes = form.notes.data
            available = form.available.data

            pet = Pet(name=name, species=species, photo_url=photo_url, age=age, notes=notes, available=available)
            db.session.add(pet)
            db.session.commit()
            return redirect("/")
    except: 
         return redirect("/add")
    
@app.route("/delete/formdata/<int:id>", methods=["GET"])
def formdata_delete(id):
        del_pet = Pet.query.get(id)
        db.session.delete(del_pet)
        db.session.commit()
        return redirect("/")

@app.route("/pet/<int:id>/details")
def pet_details(id):
     pet = Pet.get_by_id(id)
     return render_template("pet_details.html", pet=pet)

@app.route("/pet/<int:id>/edit", methods=["POST", "GET"])
def edit_pet(id):
     pet = Pet.get_by_id(id)
     form = AddPetForm()
     if form.validate_on_submit():
          pet.name = form.name.data
          pet.species = form.species.data
          pet.photo_url =  form.photo_url.data
          pet.age = form.age.data
          pet.notes = form.notes.data
          pet.available = form.available.data
          db.session.commit()
          return redirect("/")
     form.name.data = pet.name
     form.species.data = pet.species
     form.photo_url.data = pet.photo_url
     form.age.data = pet.age
     form.notes.data = pet.notes
     form.available.data = pet.available
     return render_template("edit.html", form=form, pet=pet)

