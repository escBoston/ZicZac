from flask import Flask, request, Response, render_template
import pickle
from project_test import *

app = Flask('dev')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/submitsignup')
def submitsignup():
    user_input = request.args
    username = user_input["username"]

    acc = open("accounts.obj", 'rb')
    accounts = pickle.load(acc)
    acc.close()

    inv = open("inventory.obj",'rb')
    inventory = pickle.load(inv)
    inv.close()

    if user_input["username"] in accounts:
        return render_template('signup.html', message="username taken")
    else:
        accounts[username] = Account(user_input["password"])
        file = open("accounts.obj","wb")
        pickle.dump(accounts,file)
        file.close()
        return render_template('index.html', username=username, orders=accounts[username].orders, inventory=inventory)

@app.route('/submit')
def submit():
    acc = open("accounts.obj",'rb')
    accounts = pickle.load(acc)
    acc.close()

    inv = open("inventory.obj",'rb')
    inventory = pickle.load(inv)
    inv.close()

    user_input = request.args
    if user_input["username"] not in accounts:
        return render_template('login.html', message="invalid username")
    elif accounts[user_input["username"]].password != user_input["password"]:
        return render_template('login.html', message="invalid password")
    else:
        return render_template('index.html', username=user_input["username"], orders=accounts[user_input["username"]].orders, inventory=inventory)

@app.route('/index')
def index():
    inv = open("inventory.obj",'rb')
    inventory = pickle.load(inv)
    inv.close()

    sort = request.args.get('sort')
    if sort=='recent':
        inventory.sort(key=Item.get_date)
    elif sort=='top':
        inventory.sort(key=Item.get_rating)

    return render_template('index.html', inventory=inventory)

if __name__ == '__main__':
    #app.run(host='0.0.0.0')
    app.run(debug=True, port=5000)