from boggle import Boggle
from flask import Flask, render_template, redirect, session, request, jsonify
app = Flask(__name__)

boggle_game = Boggle()
board = boggle_game.make_board()
games_played = 0

@app.route("/")
def make_board():
    return render_template("board.html", board=board)

@app.route("/receiver")
def receiver():
    guess = request.args["guess"]
    result = boggle_game.check_valid_word(board, guess)
    return jsonify({'guess': guess, "result": result})

@app.route("/game_end")
def end_game():
    global games_played
    games_played += 1
    return jsonify(games_played)