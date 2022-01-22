from flask import Flask

app = Flask(__name__)

@app.route("/test")
def test():
    return {"teste": ["teste1", "teste2", "teste3"]}

if __name__ == "__main__":
    app.run(debug=True)
