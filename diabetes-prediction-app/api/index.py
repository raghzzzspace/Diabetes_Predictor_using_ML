# api/index.py

from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify(message="Hello from Vercel!")

# Entry point for Vercel
def handler(event, context):
    return app
    