from flask import Blueprint, request, jsonify
import subprocess
import re
import whois
from concurrent.futures import ThreadPoolExecutor
from flask_cors import CORS


nmap_blueprint = Blueprint("nmap", __name__)
CORS(nmap_blueprint, resources={r"/*": {"origins": "http://localhost:5173"}})
executor = ThreadPoolExecutor(max_workers=5)


def sanitize_target(target):

    target = re.sub(r"https?://", "", target)
    return target.split("/")[0]


def run_nmap(target):
    try:
        result = subprocess.check_output(
            [
                r"C:\Program Files (x86)\Nmap\nmap.exe",
                "-F",
                target,
            ],
            stderr=subprocess.STDOUT,
            text=True,
        )
        return result
    except subprocess.CalledProcessError as e:
        return f"Nmap Error: {e.output}"


def run_whois(target):
    try:
        domain_info = whois.whois(target)
        return str(domain_info)
    except Exception as e:
        return f"Whois Error: {str(e)}"


@nmap_blueprint.route("/scan", methods=["GET"])
def scan():
    target = request.args.get("target")

    if not target:
        return jsonify({"error": "Target parameter is required"}), 400

    sanitized_target = sanitize_target(target.strip())

    future_nmap = executor.submit(run_nmap, sanitized_target)
    future_whois = executor.submit(run_whois, sanitized_target)

    nmap_result = future_nmap.result()
    whois_result = future_whois.result()

    combined_result = (
        f"--- Nmap Result ---\n{nmap_result}\n\n--- Whois Result ---\n{whois_result}"
    )

    return jsonify({"result": combined_result})
