import unittest
import json
import flask
import flask_cors
import sqlite3
from flask import g
from passwordHash import *

cors = flask_cors.CORS()

app = flask.Flask(__name__)
app.debug = True
cors.init_app(app)

database = './data/db.db'

#@app.route('/api/login', methods=['POST'])
def login(username, password):
    #req = flask.request.get_json(force=True)
    #username = req.get('username')
    #password = req.get('password')
    ph = passwordHash()

    with app.app_context():
        with sqlite3.connect(database) as con:
            cur = con.cursor()
            cur.execute("select * from accounts")
            accounts = cur.fetchall()
            for a in accounts:
                if a[0] == username:
                    message = 'Login accepted.' if ph.check_password(password, a[2], a[3]) else 'Incorrect password'
                    return {'message': message}, 200
            return {'message': 'Invalid username.'}, 200

class TestMethods(unittest.TestCase):
    def test_login(self, message):
        self.assertEqual(message, 'Login accepted.')

login_msg_fail = login('securitytest', 'wrongpass')[0]["message"]
login_msg_pass = login('securitytest', 'Securitytest1!')[0]["message"]

t1 = TestMethods()
t1.test_login(login_msg_pass)
t1.test_login(login_msg_fail)
