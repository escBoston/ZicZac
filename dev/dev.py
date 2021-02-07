from flask import Flask, request, Response, render_template
import pickle

app = Flask('dev')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/submit')
def submit():
    return 0

if __name__ == '__main__':
    app.run(host='0.0.0.0')