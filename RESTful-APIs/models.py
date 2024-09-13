from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)
    app.app_context().push()


class Cupcake(db.Model):
    __tablename__ = "cupcakes"


    @classmethod
    def serialize_by_id(cls, cupcake_id):
        cupcake = cls.query.get_or_404(cupcake_id)
        return {"id":cupcake.id,
                "flavor":cupcake.flavor,
                "size":cupcake.size,
                "rating":cupcake.rating,
                "image":cupcake.image}

    @classmethod
    def delete_by_id(cls, cupcake_id):
        cupcake = cls.query.get_or_404(cupcake_id)
        db.session.delete(cupcake)
        db.session.commit()
        return
    
    @classmethod
    def get_id_by_flavor(cls, cupcake_flavor):
        cupcake = cls.query.filter(cls.flavor==cupcake_flavor).first()
        return cupcake.id

    id = db.Column(db.Integer,
               primary_key=True,
               autoincrement=True
               )
    
    flavor = db.Column(db.Text, 
                       nullable=False,
                       unique=True)
    
    size = db.Column(db.Text,
                     nullable=False)
    
    rating = db.Column(db.Float,
                       nullable=False)
    
    image = db.Column(db.Text,
                      nullable=False,
                      default='https://thestayathomechef.com/wp-content/uploads/2017/12/Most-Amazing-Chocolate-Cupcakes-1-small.jpg')