from flask import Flask
from controllers import task

app = Flask(__name__)


app.register_blueprint(task.bp)


if __name__ == "__main__":
    app.run()
