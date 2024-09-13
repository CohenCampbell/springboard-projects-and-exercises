from flask import Flask
app = Flask(__name__)

@app.route("/welcome")
def welcome1():
    return "<h1>Welcome</h1>"

@app.route("/welcome/<var>")
def welcome2(var):
    return f"<h1>Welcome {var}</h1>"
