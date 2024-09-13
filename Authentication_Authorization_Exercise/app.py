from flask import Flask, render_template, redirect, request, jsonify, flash, session
from models import db, connect_db, User, Feedback
from forms import RegisterForm, LoginForm
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.secret_key = "SUN"
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///users'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False

connect_db(app)
bcrypt = Bcrypt(app)

@app.route("/create_db")
def db_creation():
    
    db.create_all()
    return redirect("/")


@app.route("/")
def homepage():
    return redirect("/register")

@app.route("/register", methods=["GET"])
def get_register():
    form = RegisterForm()
    return render_template("register.html", form=form)

@app.route("/register", methods=["POST"])
def post_register():
    form = RegisterForm()
    if form.validate_on_submit():
        username = form.username.data
        email = form.email.data
        first = form.first_name.data
        last = form.last_name.data
        user1 = User.register(username, form.password.data, email, first, last)

        db.session.add(user1)
        db.session.commit()

        session["user_id"] = user1.id
        return redirect("/secret")
    return render_template("/error")

@app.route("/login", methods=["GET"])
def get_login():
    form = LoginForm()
    return render_template("login.html", form=form)

@app.route("/login", methods=["POST"])
def post_login():
    form = LoginForm() 
    input = form.password.data
    user = User.get_by_username(form.username.data)
    
    if(user == None):
        flash("username or password is incorrect ")
        return redirect("/login")
    
    password = user.password
    
    if(bcrypt.check_password_hash(password, input)):
        session["user_id"] = user.id
        return redirect("/secret")
    
    flash("username or password is incorrect ")
    return redirect("/login")

@app.route("/secret", methods=["GET"])
def get_secret():
    if "user_id" not in session:
        flash("You must be logged in to view!")
        return redirect("/")
    user = User.get_by_id(session["user_id"])
    return render_template("secrets.html", user=user)

@app.route("/users/<username>", methods=["GET"])
def user_info(username):
    if "user_id" not in session:
        flash("You must be logged in to view!")
        return redirect("/")
    
    id = session["user_id"]
    user = User.get_by_username(username)
    all_feedback = Feedback.query.filter(Feedback.username == username).all()
    if(User.get_by_username(username) == None):
        user = User.get_by_id(id)
        return redirect(f"/users/{user.username}")
    
    if(user.id != id):
        user = User.get_by_id(id)
        return redirect(f"/users/{user.username}")
    
    return render_template("/userInfo.html", user=user, feedback=all_feedback)

@app.route("/logout")
def logout():
    session.clear()
    return redirect('/')

@app.route("/users/<username>/feedback/add", methods=["GET"])
def add_feedback(username):
    if "user_id" not in session:
        flash("You must be logged in to view!")
        return redirect("/")
    
    id = session["user_id"]
    user = User.get_by_username(username)

    if(User.get_by_username(username) == None):
        user = User.get_by_id(id)
        return redirect(f"/users/{user.username}/feedback/add")
    
    if(user.id != id):
        user = User.get_by_id(id)
        return redirect(f"/users/{user.username}/feedback/add")
    
    return render_template("/addFeedback.html", user=user)

@app.route("/users/<username>/feedback/add", methods=["POST"])
def post_feedback(username):
    user = User.get_by_username(username)

    title = request.form["title"]
    content = request.form["content"]
    newFeedback = Feedback(title=title, content=content, username=username)
    db.session.add(newFeedback)
    db.session.commit()

    return redirect(f"/users/{user.username}")

@app.route("/delete/<username>", methods=["POST"])
def delete_user(username):
    if "user_id" not in session:
        flash("You must be logged in to view!")
        return redirect("/")
    
    id = session["user_id"]
    user = User.get_by_id(id)

    if user.username != username:
        return redirect("/")

    User.delete_by_username(username)
    flash(f"{username} has been deleted")
    return redirect("/")

@app.route("/feedback/<feedback_id>/update")
def update_feedback(feedback_id):
    if "user_id" not in session:
        flash("You must be logged in to view!")
        return redirect("/")
    
    id = session["user_id"]
    user = User.get_by_id(id)
    feedback = Feedback.get_feedback_by_id(feedback_id)
    if(user == None):
        flash("You must be logged in to view!")
        return redirect("/")
    return render_template("/editFeedback.html", user=user, feedback=feedback)

@app.route("/feedback/<feedback_id>/update", methods=["POST"])
def post_update_feedback(feedback_id):
    if "user_id" not in session:
        flash("You must be logged in to view!")
        return redirect("/")
    
    id = session["user_id"]
    user = User.get_by_id(id)
    feedback = Feedback.get_feedback_by_id(feedback_id)
    if(user == None):
        flash("You must be logged in to view!")
        return redirect("/")
    
    if(feedback.user.id != id):
        return redirect(f"/users/{user.username}")

    feedback.title = request.form["title"]
    feedback.content = request.form["content"]
    db.session.commit()
    return redirect(f"/users/{user.username}")

@app.route("/feedback/<feedback_id>/delete", methods=["POST"])
def delete_feedback(feedback_id):
    feedback = Feedback.get_feedback_by_id(feedback_id)
    if "user_id" not in session:
        flash("You must be logged in to view!")
        return redirect("/")
    
    id = session["user_id"]
    user = User.get_by_id(id)

    if(user == None):
        flash("You must be logged in to view!")
        return redirect("/")
    
    
    db.session.delete(feedback)
    db.session.commit()
    return redirect(f"/users/{user.username}")

