from flask import Flask, render_template
app=Flask(__name__, static_folder='static')
@app.route('/')
def watch():
    return render_template("clock.html")

app.run(debug=True)
