from flask_wtf import FlaskForm
from wtforms.fields import StringField, PasswordField, TextAreaField, EmailField
from wtforms.validators import DataRequired, Email, Length
from wtforms.widgets import TextArea


class MessageForm(FlaskForm):
    """Form for adding/editing messages."""

    text = TextAreaField('text', validators=[DataRequired()])


class UserAddForm(FlaskForm):
    """Form for adding users."""

    username = StringField('Username', validators=[DataRequired()])
    email = EmailField('E-mail', validators=[DataRequired()])
    password = PasswordField('Password', validators=[Length(min=6)])
    image_url = StringField('(Optional) Image URL')


class LoginForm(FlaskForm):
    """Login form."""

    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[Length(min=6)])

class UserEditForm(FlaskForm):
    """ Form for editing users. """

    username = StringField('Username')
    email = EmailField('E-mail')
    image_url = StringField('Profile Image URL')
    header_image_url = StringField('Header Image URL')
    bio = StringField("Bio Paragraph", widget=TextArea())
    location = StringField("City, State")
    password = PasswordField("Enter Current Password To Confirm Changes")