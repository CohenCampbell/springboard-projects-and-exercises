from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey

app = Flask(__name__)
app.config["SECRET_KEY"] = "12345"
debug = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

responses = []
id =0
id_count = 0

@app.route("/")
def start_page():
    return render_template("start.html", satisfaction_survey = satisfaction_survey, id=id)

@app.route("/question/<int:id>")
def question_page(id): 
    if(id_count == 0):
      responses = session["responses"]
      session["responses"] = responses
    if(id_count == id):
        return render_template("question.html", id=id, satisfaction_survey=satisfaction_survey)
    if(id_count >= len(satisfaction_survey.questions)):
        flash("Sorry, you're trying to access an invalid question")
        return redirect("/thank_you")
    flash("Sorry, you're trying to access an invalid question")
    return redirect(f"/question/{id_count}")

@app.route("/receive_ans/<int:id>", methods=["POST", "GET"])
def receiver(id):
    responses.append(request.args[f"ans_to_question_{id}"])
    session["responses"] = responses
    id +=1
    global id_count
    id_count += 1
    if(id >= len(satisfaction_survey.questions)):
        return redirect("/thank_you")
    return redirect(f"/question/{id}")

@app.route("/thank_you")
def thanks():
    print(session["responses"])
    return """
    <h1> You've completed the survey, Thank You! </h1>
    """