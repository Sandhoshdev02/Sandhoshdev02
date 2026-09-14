from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/api/health")
def health():
    return jsonify({"status": "ok"})


@app.route("/api/greeting")
def greeting():
    return jsonify({"message": "Hello from the starter backend"})


if __name__ == "__main__":
    app.run(port=5000)
