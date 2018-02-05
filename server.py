from flask import Flask, request
app = Flask(__name__)
 
@app.route("/datacampEmail", methods=['POST'])
def datacampEmail():
    return request.data
 
if __name__ == "__main__":
    app.run()