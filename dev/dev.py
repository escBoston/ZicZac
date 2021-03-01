import pickle
import os

import flask
import flask_cors

from project_test import *

cors = flask_cors.CORS()

# Initialize flask app for the example
app = flask.Flask(__name__)
app.debug = True
# app.config['SECRET_KEY'] = 'top secret'
# app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
# app.config['JWT_REFRESH_LIFESPAN'] = {'days': 30}

# Initializes CORS so that the api_tool can talk to the example app
cors.init_app(app)


def _load_user_info():
    """Load user info!"""
    with open('accounts.obj', 'rb') as fp:
        accounts = pickle.load(fp)

    with open('inventory.obj', 'rb') as fp:
        inventory = pickle.load(fp)
    return accounts, inventory

# Set up some routes for the example
@app.route('/api/')
def home():
    return {"Hello": "World"}, 200


@app.route('/api/login', methods=['POST'])
def login():
    """
    Logs a user in by parsing a POST request containing user credentials.
    """
    accounts, inventory = _load_user_info()

    req = flask.request.get_json(force=True)
    username = req.get('username')
    password = req.get('password')

    if username not in accounts:
        return {'message': 'Invalid username.'}, 200
    elif password != accounts[username].password:
        return {'message': 'Incorrect password.'}, 200
    else:
        return {'message': 'Login accepted.'}, 200

@app.route('/api/signup', methods=['POST'])
def signup():
    accounts, inventory = _load_user_info()

    req = flask.request.get_json(force=True)
    email = req.get('email')
    username = req.get('username')
    password = req.get('password')

    if username in accounts:
        return {'message' : 'username taken'}, 200
    else:
        accounts[username] = Account(password=password, email=email)
        file = open("accounts.obj", "wb")
        pickle.dump(accounts, file)
        file.close()
        return {'message' : 'success'}, 200

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

# @app.route('/login')
# def login():
#     return render_template('login.html')

# @app.route('/signup')
# def signup():
#     return render_template('signup.html')

# @app.route('/submitsignup')
# def submitsignup():
#     user_input = request.args
#     username = user_input["username"]

#     acc = open("accounts.obj", 'rb')
#     accounts = pickle.load(acc)
#     acc.close()

#     inv = open("inventory.obj",'rb')
#     inventory = pickle.load(inv)
#     inv.close()

#     if user_input["username"] in accounts:
#         return render_template('signup.html', message="username taken")
#     else:
#         accounts[username] = Account(user_input["password"])
#         file = open("accounts.obj","wb")
#         pickle.dump(accounts,file)
#         file.close()
#         return render_template('index.html', username=username, orders=accounts[username].orders, inventory=inventory)

# @app.route('/submit')
# def submit():
#     acc = open("accounts.obj",'rb')
#     accounts = pickle.load(acc)
#     acc.close()

#     inv = open("inventory.obj",'rb')
#     inventory = pickle.load(inv)
#     inv.close()

#     user_input = request.args
#     if user_input["username"] not in accounts:
#         return render_template('login.html', message="invalid username")
#     elif accounts[user_input["username"]].password != user_input["password"]:
#         return render_template('login.html', message="invalid password")
#     else:
#         return render_template('index.html', username=user_input["username"], orders=accounts[user_input["username"]].orders, inventory=inventory)

# @app.route('/index')
# def index():
#     inv = open("inventory.obj",'rb')
#     inventory = pickle.load(inv)
#     inv.close()

#     sort = request.args.get('sort')
#     if sort=='recent':
#         inventory.sort(key=Item.get_date)
#     elif sort=='top':
#         inventory.sort(key=Item.get_rating)

#     return render_template('index.html', inventory=inventory)
