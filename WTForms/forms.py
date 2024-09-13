from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, ValidationError, SelectField
from wtforms.validators import NumberRange, URL

class AddPetForm(FlaskForm):

    name = StringField("Pet Name")

    species = SelectField("Species", choices=[("cat", "Cat"), ("dog", "Dog"), ("porcupine", "Porcupine")])

    photo_url = StringField("Photo URL", validators=[URL()])

    age = IntegerField("Pet Age", validators=[NumberRange(min=1, max=30)])

    notes = StringField("Notes")

    available = BooleanField("Available")

    