import pickle
import os
import json
import arrow
import flask
import flask_cors
import sqlite3
from flask import g

from passwordManager import *
from passwordHash import *

from flask_restful import Resource, Api
from apispec import APISpec
from marshmallow import Schema, fields
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec
from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, doc, use_kwargs


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

#setting up swagger api
api = Api(app)
app.config.update({
    'APISPEC_SPEC': APISpec(
        title='Test',
        version='v1',
        plugins=[MarshmallowPlugin()],
        openapi_version='2.0.0'
    ),
    'APISPEC_SWAGGER_URL': '/swagger/',  # URI to access API Doc JSON
    'APISPEC_SWAGGER_UI_URL': '/swagger-ui/'  # URI to access UI of API Doc
})
docs = FlaskApiSpec(app)
class ResponseSchema(Schema):
    message = fields.Str(default='Success')
class RequestSchema(Schema):
    api_type = fields.String(required=True, description="test")


# Set up some routes for the example
@app.route('/api/')
def home():
    return {"Hello": "World"}, 200

def query_db(queries, method, params):
    with app.app_context():
        with sqlite3.connect(database) as con:
            cur = con.cursor()
            if (method == 'login'):
                cur.execute(queries[0])
                accounts = cur.fetchall()
                for a in accounts:
                    if a[0] == params['username']:
                        message = 'Login accepted.' if params['ph'].check_password(params['password'], a[2], a[3]) else 'Incorrect password'
                        return {'message': message}, 200
                return {'message': 'Invalid username.'}, 200
            elif (method == 'signup'):
                cur.execute(queries[0])
                accounts = cur.fetchall()
                usernames = []
                [usernames.append(a[0]) for a in accounts]
                if params['username'] in usernames:
                    return {'message' : 'username taken'}, 200
                else:
                    cur.execute(queries[1])
                    cur.execute(queries[2])
                    cur.execute(queries[3])
                    con.commit()
                    return {'message' : 'success'}, 200
            elif (method == 'sort'):
                if params['sort'] == 'recent':
                    cur.execute(queries[0])
                elif params['sort'] =='price':
                    cur.execute(queries[1])
                inv = cur.fetchall()
                return {'inventory' : jsonify_inv(inv)}, 200
            elif (method == 'select_category' or method == 'getitem' or method == 'search'):
                cur.execute(queries[0])
                items = cur.fetchall()
                return {'items' : jsonify_inv(items)}, 200
            elif (method == 'post_product'):
                cur.execute(queries[0])
                con.commit()
                return {'message' : 'success'}, 200
            elif (method == 'send_message'):
                print(queries[1])
                cur.execute(queries[0])
                cur.execute(queries[1])
                con.commit()
                return {'message' : 'success'}, 200
            elif (method == 'get_inbox'):
                cur.execute(queries[0])
                inbox = cur.fetchall()
                cur.execute(queries[1])
                outbox = cur.fetchall()
                return {'inbox' : inbox, 'outbox' : outbox}, 200
            elif (method == 'get_messages'):
                cur.execute(queries[0])
                convoIn = cur.fetchall()
                cur.execute(queries[1])
                convoOut = cur.fetchall()
                return {'convoIn' : convoIn, 'convoOut' : convoOut}, 200
            else:
                return {'message' : 'success'}, 200

class Login(MethodResource, Resource):
    @doc(description='login', tags=['login'])
    @marshal_with(ResponseSchema)  # marshalling
    def post(self):
        req = flask.request.get_json(force=True)
        params = {
            'username' : req.get('username'),
            'password' : req.get('password'),
            'ph' : passwordHash()
        }
        queries = ["select * from accounts"]
        return query_db(queries = queries, method = "login", params = params)

api.add_resource(Login, '/api/login')
docs.register(Login)

class Signup(MethodResource, Resource):
    def post(self):
        req = flask.request.get_json(force=True)
        params = {
            'email' : req.get('email'),
            'username' : req.get('username'),
            'password' : req.get('password'),
        }

        pm = passwordManager()
        if (not pm.formatChecking(params['password'])[1]):
            return {'message' : 'password requirements not met'}, 200

        ph = passwordHash()
        salt, password_enc = ph.encrypt(params['password'])
        params['salt'] = salt
        params['password_enc'] = password_enc

        queries = [
            "select * from accounts",
            f"INSERT INTO accounts (username, email, salt, password_enc) VALUES ('{params['username']}', '{params['email']}', '{params['salt']}', '{params['password_enc']}')",
            f"CREATE TABLE {params['username']}_inbox (message_id INTEGER PRIMARY KEY, sender STRING, body TEXT, date DATETIME)",
            f"CREATE TABLE {params['username']}_outbox (message_id INTEGER PRIMARY KEY, recipient STRING, body TEXT, date DATETIME)"
        ]
        return query_db(queries = queries, method = 'signup', params = params)

api.add_resource(Signup, '/api/signup')
docs.register(Signup)

def jsonify_inv(inv):
    return [{
        'title' : i[0],
        'price' : i[1],
        'description' : i[2],
        'category' : i[3],
        'date_added' : i[4],
        'photo_filepath' : i[5],
        'seller' : i[6],
        'state' : i[7],
        'photo' : i[8]} for i in inv]


class Sort(MethodResource, Resource):
    def post(self):
        req = flask.request.get_json(force=True)
        params = {'sort' : req.get('sort')}
        queries = [
            "select * from inventory order by date_added desc",
            "select * from inventory order by price"
        ]

        return query_db(queries = queries, method = 'sort', params = params)

api.add_resource(Sort, '/api/sort')
docs.register(Sort)


class SelectCategory(MethodResource, Resource):
    @doc(description='getting categories', tags=['getting_categories'])
    #@marshal_with(ResponseSchema)  # marshalling
    def post(self):
        req = flask.request.get_json(force=True)
        params = {'cat' : req.get('category')}
        queries = [f"select * from inventory where category='{params['cat']}'"]
        return query_db(queries = queries, method='select_category', params = params)


api.add_resource(SelectCategory, '/api/category')
docs.register(SelectCategory)


class GetItem(MethodResource, Resource):
    def post(self):
        req = flask.request.get_json(force=True)
        params = {'title' : req.get('title')}
        queries = [f"select * from inventory where title='{params['title']}'"]
        return query_db(queries = queries, method = 'getitem', params = params)

api.add_resource(GetItem, '/api/get_item')
docs.register(GetItem)

class Search(MethodResource, Resource):
    def post(self):
        req = flask.request.get_json(force=True)
        params = {'query' : req.get('query')}
        queries = [f"select * from inventory where title like '%{params['query']}%' or description like '%{params['query']}%'"]
        return query_db(queries = queries, method = 'search', params = params)

api.add_resource(Search, '/api/search')
docs.register(Search)

class PostProduct(MethodResource, Resource):
    def post(self):
        req = flask.request.get_json(force=True)
        title = req.get('title')
        params = {
            'title' : title,
            'price' : req.get('price'),
            'description' : req.get('description'),
            'category' : req.get('category'),
            'date_added' : arrow.now().format('YYYY-MM-DD'),
            'photo_filepath' : f"/img/{title}.jpg",
            'seller' : req.get('seller'),
            'state' : req.get('state'),
            'image' : req.get('image')
        }
        queries = [f"insert into inventory (title, price, description, category, date_added, photo_filepath, seller, state, photo) values ('{params['title']}', '{params['price']}', '{params['description']}', '{params['category']}', '{params['date_added']}', '{params['photo_filepath']}', '{params['seller']}', '{params['state']}', '{params['image']}')"]
        return query_db(queries = queries, method = 'post_product', params = params)

api.add_resource(PostProduct, '/api/post_product')
docs.register(PostProduct)


class SendMessage(MethodResource, Resource):
    def post(self):
        req = flask.request.get_json(force=True)
        params = {
            'seller' : req.get('seller'),
            'buyer' : req.get('buyer'),
            'message' : req.get('message'),
            'date' : arrow.now().format('YYYY-MM-DD HH:MM:SS')
        }
        queries = [
            f"INSERT INTO {params['seller']}_inbox (sender, body, date) VALUES ('{params['buyer']}', '{params['message']}', '{params['date']}')",
            f"INSERT INTO {params['buyer']}_outbox (recipient, body, date) VALUES ('{params['seller']}', '{params['message']}', '{params['date']}')"
        ]
        return query_db(queries = queries, method = 'send_message', params = params)

api.add_resource(SendMessage, '/api/send_message')
docs.register(SendMessage)


class GetInbox(MethodResource, Resource):
    def post(self):
        req =  flask.request.get_json(force=True)
        params = {'user' : req.get('user')}
        queries = [
            f"SELECT * FROM {params['user']}_inbox",
            f"SELECT * FROM {params['user']}_outbox"
        ]
        return query_db(queries = queries, method = 'get_inbox', params = params)

api.add_resource(GetInbox, '/api/get_inbox')
docs.register(GetInbox)


class GetMessage(MethodResource, Resource):
    def post(self):
        req = flask.request.get_json(force=True)
        params = {
            'user' : req.get('user'),
            'contact' : req.get('contact')
        }
        queries = [
            f"SELECT * FROM {params['user']}_inbox WHERE sender LIKE '%{params['contact']}%'",
            f"SELECT * FROM {params['user']}_outbox WHERE recipient LIKE '%{params['contact']}%'"
        ]
        return query_db(queries = queries, method = 'get_messages', params = params)

api.add_resource(GetMessage, '/api/get_messages')
docs.register(GetMessage)

# Run the example
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
