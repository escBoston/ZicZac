from flask import Flask, request, Response, render_template
import pickle
from project_test import *

app = Flask('dev')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/submit')
def submit():
    file = open("accounts.obj",'rb')
    accounts = pickle.load(file)
    file.close()
    
    user_input = request.args
    if user_input["username"] not in accounts:
        return "invalid username"
    elif accounts[user_input["username"]].password != user_input["password"]:
        return "invalid password"
    else:
        return render_template('home.html', username=user_input["username"], orders=accounts[user_input["username"]].orders)

if __name__ == '__main__':
    #app.run(host='0.0.0.0')
    app.run(debug=True, port=5000)