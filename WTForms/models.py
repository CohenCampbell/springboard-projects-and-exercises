from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)
    app.app_context().push()


class Pet(db.Model):
    __tablename__ = 'pets'

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get_or_404(id)

    id = db.Column(db.Integer,
               primary_key=True,
               autoincrement=True
               )
    name = db.Column(db.Text,
                     nullable=False,
                     )
    
    species = db.Column(db.Text,
                        nullable=False)
    
    photo_url = db.Column(db.Text,
                          default='https://braverplayers.org/wp-content/uploads/2022/09/blank-pfp.png',
                          nullable=True)
    
    age = db.Column(db.Integer,
                    default='Unkown',
                    nullable=True)
    
    notes = db.Column(db.Text,
                      nullable=True)
    
    available = db.Column(db.Boolean,
                          default='True',
                          nullable=False)