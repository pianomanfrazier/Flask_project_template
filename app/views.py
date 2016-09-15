from flask import render_template
from app import app, freezer

from datetime import datetime

@app.route('/')
@app.route('/index/')
def index():
    return render_template('index.html')

@app.route('/about/')
def about():
    return render_template('about.html')

@app.route('/contact/')
def contact():
    return render_template('contact.html')

@app.context_processor
def get_date():
    return dict(time=datetime.utcnow())

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@freezer.register_generator
def error_handlers(e):
    yield "/404/"
