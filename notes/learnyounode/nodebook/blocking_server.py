import time

from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    print("Request received. Starting 2-second 'work'...")
    time.sleep(2)  # This BLOCKS the entire process!
    print("Work finished. Sending response.")
    return "<p>Hello from the blocking server!</p>"


if __name__ == "__main__":
    # Flask's dev server is single-threaded by default
    app.run(port=5000, threaded=False)
