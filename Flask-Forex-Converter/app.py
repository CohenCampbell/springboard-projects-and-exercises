from flask import Flask, redirect, request, render_template, flash
import requests, json, math
app = Flask(__name__)
app.secret_key = 'super secret key'
c_from = None
c_to = None
amount = None



@app.route("/", methods=["GET", "POST"])
def input_func():
    global c_from; c_from = request.form.get("cFrom", None)
    global c_to; c_to = request.form.get("cTo", None)
    global amount; amount = request.form.get("amount", None)
    api1 = json.loads(requests.get("http://api.exchangerate.host/live?access_key=a65542ea2d66a389480d2c17e482a49e").text)
    supported_currencies = json.loads(requests.get("http://api.exchangerate.host/list?access_key=a65542ea2d66a389480d2c17e482a49e").text)
    
    if(c_from == None):
        return render_template("input.html")
    
    if(c_to.upper() in supported_currencies["currencies"].keys() and c_from.upper() in supported_currencies["currencies"].keys()):
        ans = json.loads(requests.get(f"http://api.exchangerate.host/convert?from={c_from.upper()}&to={c_to.upper()}&amount={amount}&access_key=a65542ea2d66a389480d2c17e482a49e").text)["result"]
        ans = math.floor(ans * 100)/100
        return render_template("output.html", ans=ans, c_to=c_to.upper())
    elif(c_from not in supported_currencies["currencies"].keys()):
        flash("The currency you are converting from is not supported")
    elif(c_to not in supported_currencies["currencies"].keys()):
        flash("The currency you are converting to is not supported")
    return render_template("input.html")
  
@app.route("/output")
def output_func():
    return render_template("output.html")

@app.route("/return")
def return_func():
    global c_from; c_from = None
    global c_to;  c_to = None
    global amount; amount = None
    return redirect("/")