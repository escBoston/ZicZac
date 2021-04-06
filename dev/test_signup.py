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

class TestMethods(unittest.TestCase):
        def setUp(self):
            self.username = 'dtiyekbayeva'
            self.password = 'testpassword'
            self.email = 'dtiyekba@bu.edu'

        def tearDown(self):
            with sqlite3.connect(database) as con:
                cur = con.cursor()
                cur.execute("select username, email, password_enc from accounts where username='dtiyekbayeva'")
                user = cur.fetchone()
                if user:
                    cur.execute("DELETE from accounts where username='dtiyekbayeva'")
                    con.commit()


        def testUserExists(self):
            with sqlite3.connect(database) as con:
                cur = con.cursor()
                cur.execute("INSERT INTO accounts (username, email, password_enc) VALUES (?,?,?)",(self.username, self.email, self.password))
                cur.execute("select username, email, password_enc from accounts where username='dtiyekbayeva'")
                user = cur.fetchone()
                con.commit()

            self.assertEqual(self.username, user[0])
            self.assertEqual(self.password, user[2])
            self.assertEqual(self.email, user[1])
if __name__ == '__main__':
    unittest.main()
