from flask import Flask, jsonify, request
from Classes.User import User  # Import User model
from Classes.Apartment import Apartment  # Import Apartment model
from Classes.config import configure_app, db  # Import configure_app from config.py

app = Flask(__name__)

# Call the configure_app function to set up the app
configure_app(app)

# Create a route to test the connection
@app.route('/users')
def get_users():
    users = User.query.limit(5).all()
    return jsonify([user.full_name for user in users])

# New route to get apartments with filtering options
@app.route('/apartments')
def get_apartments():
    # Get query parameters for filtering
    price_min = request.args.get('price_min', type=int)  # Minimum price
    price_max = request.args.get('price_max', type=int)  # Maximum price
    location = request.args.get('location', type=str)  # Location filter
    area_min = request.args.get('area_min', type=int)  # Minimum area
    area_max = request.args.get('area_max', type=int)  # Maximum area
    type = request.args.get('type', type=str)  # get type 

    # Start building the query for apartments
    query = Apartment.query

    # Apply filters if the corresponding parameters are provided
    if type:
        query = query.filter(Apartment.type.ilike(f'%{type}%'))  # Case-insensitive search
    if price_min:
        query = query.filter(Apartment.price >= price_min)
    if price_max:
        query = query.filter(Apartment.price <= price_max)
    if location:
        query = query.filter(Apartment.location.ilike(f'%{location}%'))  # Case-insensitive search
    if area_min:
        query = query.filter(Apartment.area >= area_min)
    if area_max:
        query = query.filter(Apartment.area <= area_max)

    # Get the apartments based on the filters
    apartments = query.all()

    # Return the filtered apartments in JSON format
    return jsonify([{
        'id': apartment.id,
        'owner_id': apartment.owner_id,
        'location': apartment.location,
        'price': apartment.price,
        'unit_number': apartment.unit_number,
        'area': apartment.area,
        'number_of_rooms': apartment.number_of_rooms,
        'type': apartment.type,
        'description': apartment.description,
        "photos": f"http://localhost:5000{apartment.photos}" if apartment.photos else None,  # Construct full image URL
        'status': apartment.status,
        'created_at': apartment.created_at
    } for apartment in apartments])

if __name__ == '__main__':
    app.run(debug=True)
