from flask import Flask, render_template, redirect, request, jsonify
from models import db, connect_db, Cupcake

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcake'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False



@app.route("/create/db")
def create_base():
    db.create_all()
    return redirect("/")

connect_db(app)

@app.route("/")
def homepage():
    
    cupcakes = Cupcake.query.all()
    return render_template("homepage.html", cupcakes=cupcakes)

@app.route("/api/cupcakes")
def get_all_cupcakes():
    serial_cupcake_list = []

    all_cupcakes = Cupcake.query.all()
    for cupcake in all_cupcakes:
        serial_cupcake_list.append(Cupcake.serialize_by_id(cupcake.id))
    return jsonify(cupcakes=serial_cupcake_list)

@app.route("/api/cupcakes/<int:id>")
def get_one_cupcake(id):
    serial_cupcake = Cupcake.serialize_by_id(id)
    return jsonify(cupcake=serial_cupcake)

@app.route("/api/cupcakes/<flavor>")
def get_cupcake_by_flavor(flavor):
    cupcake_id = Cupcake.get_id_by_flavor(flavor)
    
    return jsonify(cupcake_id)

@app.route("/api/cupcakes", methods=["POST"])
def create_cupcake():
    new_cupcake = Cupcake(flavor=request.json["flavor"], 
                          size=request.json["size"], 
                          rating=request.json["rating"],
                          image=request.json["image"])
    
    db.session.add(new_cupcake)
    db.session.commit()

    cupcake = Cupcake.serialize_by_id(new_cupcake.id)
    return (jsonify(cupcake=cupcake), 201)

@app.route("/api/cupcakes/<int:id>", methods=["PATCH"])
def update_cupcake(id):
    update_cupcake = Cupcake.query.get_or_404(id)

    update_cupcake.flavor = request.json.get("flavor", update_cupcake.flavor)
    update_cupcake.size = request.json.get("size", update_cupcake.size)
    update_cupcake.rating = request.json.get("rating", update_cupcake.rating)
    update_cupcake.image = request.json.get("image", update_cupcake.image)
    db.session.commit()
    
    return jsonify(cupcake=Cupcake.serialize_by_id(id))

@app.route("/api/cupcakes/<int:id>", methods=['DELETE'])
def delete_cupcake(id):
    id
    Cupcake.delete_by_id(id)
    return {"deleted": id}