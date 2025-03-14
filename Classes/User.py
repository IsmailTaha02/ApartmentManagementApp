<<<<<<< HEAD
from Classes.config import db  # Import db from db.py

class User(db.Model):
    __tablename__ = 'users'  # Explicitly define the table name
=======
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
>>>>>>> 05c252d67367c7e9626d7a87bac2f0c0122f73b3
    id = db.Column(db.BigInteger, primary_key=True)
    full_name = db.Column(db.Text, nullable=False)
    email = db.Column(db.Text, unique=True, nullable=False)
    phone_number = db.Column(db.Text, nullable=False)
    role = db.Column(db.Enum('Administrator', 'Buyer/Tenant', 'Owner', 'Technician'), nullable=False)
    job = db.Column(db.Text)
    facebook_link = db.Column(db.Text)
    password = db.Column(db.Text, nullable=False)
    is_verified = db.Column(db.Boolean, default=False)
<<<<<<< HEAD
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def __repr__(self):
        return f'<User {self.full_name}>'
=======
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
>>>>>>> 05c252d67367c7e9626d7a87bac2f0c0122f73b3
