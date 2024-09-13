from flask import Flask, request
from operations import add, sub, mult, div
app = Flask(__name__)

@app.route("/add")
def func1():
    a = request.args["a"]
    b = request.args["b"]
    a = int(a)
    b = int(b)
    return f"{add(a, b)}"

@app.route("/sub")
def func2():
    a = request.args["a"]
    b = request.args["b"]
    a = int(a)
    b = int(b)
    return f"{sub(a, b)}"

@app.route("/mult")
def func3():
    a = request.args["a"]
    b = request.args["b"]
    a = int(a)
    b = int(b)
    return f"{mult(a, b)}"

@app.route("/div")
def func4():
    a = request.args["a"]
    b = request.args["b"]
    a = int(a)
    b = int(b)
    return f"{div(a, b)}"
