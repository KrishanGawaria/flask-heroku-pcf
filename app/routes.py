# Logic of this app exists in static/app.js file

from app import app
from flask import render_template

@app.route('/')
def index():
	return render_template('display.html')

# app.run()