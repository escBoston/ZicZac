import pickle
import os
import json
import flask
import flask_cors
import sqlite3
from flask import g

from project_classes import *

cors = flask_cors.CORS()

# Initialize flask app for the example
app = flask.Flask(__name__)
app.debug = True
# app.config['SECRET_KEY'] = 'top secret'
# app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
# app.config['JWT_REFRESH_LIFESPAN'] = {'days': 30}

# Initializes CORS so that the api_tool can talk to the example app
cors.init_app(app)

database = './data/db.db'

# def get_db():
#     db = getattr(g, '_database', None)
#     if db is None:
#         db = g._database = sqlite3.connect(database)
#     return db
#
# def _load_user_info_2():
#     with app.app_context():
#         cur = get_db().cursor()
#         cur.execute("select * from accounts")
#         accounts = cur.fetchall()
#         cur.execute("select * from inventory")
#         inventory = cur.fetchall()
#         return accounts, inventory

# def _load_user_info():
#     """Load user info!"""
#     with open('./data/accounts.obj', 'rb') as fp:
#         accounts = pickle.load(fp)
#
#     with open('./data/inventory.obj', 'rb') as fp:
#         inventory = pickle.load(fp)
#     return accounts, inventory


# Set up some routes for the example
@app.route('/api/')
def home():
    return {"Hello": "World"}, 200


@app.route('/api/login', methods=['POST'])
def login():
    req = flask.request.get_json(force=True)
    username = req.get('username')
    password = req.get('password')

    with app.app_context():
        with sqlite3.connect(database) as con:
            cur = con.cursor()
            cur.execute("select * from accounts")
            accounts = cur.fetchall()
            for a in accounts:
                if a[0] == username:
                    message = 'Login accepted.' if a[1] == password else 'Incorrect password'
                    return {'message': message}, 200
            return {'message': 'Invalid username.'}, 200


@app.route('/api/signup', methods=['POST'])
def signup():
    req = flask.request.get_json(force=True)
    email = req.get('email')
    username = req.get('username')
    password = req.get('password')

    with app.app_context():
        with sqlite3.connect(database) as con:
            cur = con.cursor()
            cur.execute("select * from accounts")
            accounts = cur.fetchall()
            usernames = []
            [usernames.append(a[0]) for a in accounts]
            if username in usernames:
                return {'message' : 'username taken'}, 200
            else:
                cur.execute("INSERT INTO accounts (username, password, email) VALUES (?,?,?)",(username, password, email))
                con.commit()
                return {'message' : 'success'}, 200

def jsonify_inv(inv):
    return [{
        'title' : i[0],
        'price' : i[1],
        'description' : i[2],
        'category' : i[3],
        'date_added' : i[4],
        'photo_filepath' : i[5],
        'seller' : i[6]} for i in inv]

@app.route('/api/sort', methods=['POST'])
def sort():
    req = flask.request.get_json(force=True)
    sort = req.get('sort')

    with app.app_context():
        with sqlite3.connect(database) as con:
            cur = con.cursor()
            if sort=='recent':
                cur.execute("select * from inventory order by date_added desc")
            elif sort=='price':
                cur.execute("select * from inventory order by price")
            inv = cur.fetchall()
            return {'inventory' : jsonify_inv(inv)}, 200

@app.route('/api/category', methods=['POST'])
def category():
    req = flask.request.get_json(force=True)
    cat = req.get('category')
    with app.app_context():
        with sqlite3.connect(database) as con:
            cur = con.cursor()
            cur.execute(f"select * from inventory where category='{cat}'")
            inv = cur.fetchall()
            return {'products' : jsonify_inv(inv)}, 200

def jsonify_item(i):
    return {
        'title' : i[0],
        'price' : i[1],
        'description' : i[2],
        'category' : i[3],
        'date_added' : i[4],
        'photo_filepath' : i[5],
        'seller' : i[6]
        }

@app.route('/api/get_item', methods=['POST'])
def get_item():
    req = flask.request.get_json(force=True)
    title = req.get('title')
    with app.app_context():
        with sqlite3.connect(database) as con:
            cur = con.cursor()
            cur.execute(f"select * from inventory where title='{title}'")
            item = cur.fetchall()
            return {'item' : jsonify_inv(item)}, 200

# @app.route('/api/get_imgs', methods=['POST'])
# def get_imgs():
#     req = flask.request.get_json(force=True)
#     titles = req.get('titles')
#     imgs = []
#     with app.app_context():
#         with sqlite3.connect(database) as con:
#             cur = con.cursor()
#             cur.execute(f"select photo_filepath from inventory where title in ('{titles[0]}')")
#             imgs.append(cur.fetchall())
#             cur.execute(f"select photo_filepath from inventory where title in ('{titles[1]}')")
#             imgs.append(cur.fetchall())
#             cur.execute(f"select photo_filepath from inventory where title in ('{titles[2]}')")
#             imgs.append(cur.fetchall())
#             cur.execute(f"select photo_filepath from inventory where title in ('{titles[3]}')")
#             imgs.append(cur.fetchall())
#             imgs = [img[0] for img in imgs]
#             return {'imgs' : imgs}, 200

# @app.route('/api/refresh', methods=['POST'])
# def refresh():
#     """
#     Refreshes an existing JWT by creating a new one that is a copy of the old
#     except that it has a refrehsed access expiration.
#     .. example::
#        $ curl http://localhost:5000/api/refresh -X GET \
#          -H "Authorization: Bearer <your_token>"
#     """
#     print("refresh request")
#     old_token = request.get_data()
#     new_token = guard.refresh_jwt_token(old_token)
#     ret = {'access_token': new_token}
#     return ret, 200


@app.route('/api/protected')
# @flask_praetorian.auth_required
def protected():
    """
    A protected endpoint. The auth_required decorator will require a header
    containing a valid JWT
    .. example::
       $ curl http://localhost:5000/api/protected -X GET \
         -H "Authorization: Bearer <your_token>"
    """
    return {'message': f'protected endpoint'}, 200#{flask_praetorian.current_user().username})'}


# Run the example
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
