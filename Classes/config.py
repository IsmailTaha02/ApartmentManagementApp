from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# Initialize the db and migrate instances
db = SQLAlchemy()
migrate = Migrate()

def configure_app(app):
    """Configure app with database and other settings."""
    
    # Configure the MySQL database connection
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root@localhost/ApartmentManagementDB'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Enable CORS for all routes
    CORS(app)

    # Initialize the database with the app
    db.init_app(app)

    # Initialize Flask-Migrate
    migrate.init_app(app, db)
