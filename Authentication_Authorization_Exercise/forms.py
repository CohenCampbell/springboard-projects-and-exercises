from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, PasswordField, EmailField, validators
from wtforms.validators import Length, InputRequired



class RegisterForm(FlaskForm):
    username = StringField("Username", validators=[InputRequired(), Length(max=20, min=1)],)

    password = PasswordField("Password", validators=[InputRequired()])

    email = EmailField("Email", validators=[InputRequired(), Length(max=50, min=1)])
    
    first_name = StringField("First Name", validators=[InputRequired(), Length(max=30, min=1)])

    last_name = StringField("Last Name", validators=[InputRequired(), Length(max=30, min=1)])

class LoginForm(FlaskForm):
    username = StringField("Username", validators=[InputRequired(), Length(max=20, min=1)],)

    password = PasswordField("Password", validators=[InputRequired()])
