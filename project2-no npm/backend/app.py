from flask import Flask
from nmap import nmap_blueprint  # type: ignore
from directory import directory_blueprint
from flask_cors import CORS
from vulnerability import vuln_blueprint  # استيراد الموديل الجديد

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

app.register_blueprint(nmap_blueprint, url_prefix="/app/nmap")
app.register_blueprint(directory_blueprint, url_prefix="/app/directory")
app.register_blueprint(
    vuln_blueprint, url_prefix="/app/vulnerability"
)  # تسجيل Blueprint الجديد

if __name__ == "__main__":
    app.run(host="localhost", port=7288, debug=True)
