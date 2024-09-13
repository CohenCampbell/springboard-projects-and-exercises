from flask_sqlalchemy import SQLAlchemy
import bcrypt
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)
    app.app_context().push()

class User(db.Model):
    __tablename__ = "user_table"

    @classmethod
    def register(cls, username, password, email, first_name, last_name):
        hashed = bcrypt.generate_password_hash(password)
        hashed_utf8 = hashed.decode("utf8")
        return cls(username=username, password=hashed_utf8, email=email,
                   first_name=first_name, last_name=last_name)

    @classmethod
    def get_by_username(cls, username):
        user = cls.query.filter(cls.username == username).first()
        return user
    
    @classmethod
    def get_by_id(cls, id):
        user = cls.query.filter(cls.id == id).first()
        return user
    
    @classmethod
    def delete_by_username(cls, username):
        user = cls.query.filter(cls.username == username).first()
        db.session.delete(user)
        db.session.commit()

    id = db.Column(db.Integer,
               primary_key=True,
               autoincrement=True
               )
    
    username = db.Column(db.String(20), 
                         primary_key=True,
                         unique=True)
    
    password = db.Column(db.Text,
                         nullable=False)
    
    email = db.Column(db.String(50),
                      nullable=False,
                      unique=True)
    
    first_name = db.Column(db.String(30),
                           nullable=False)
    
    last_name = db.Column(db.String(30),
                          nullable=False)

class Feedback(db.Model):
    __tablename__ = "feedback_table"

    @classmethod
    def get_feedback_by_id(cls, id):
        feedback = cls.query.filter(cls.id == id).first()
        return feedback

    id = db.Column(db.Integer,
               primary_key=True,
               autoincrement=True
               )
    
    title = db.Column(db.String(100), 
                      nullable=False)
    
    content = db.Column(db.Text, 
                        nullable=False)
    
    username = db.Column(db.Text,
                         db.ForeignKey('user_table.username'))
    
    user = db.relationship('User')