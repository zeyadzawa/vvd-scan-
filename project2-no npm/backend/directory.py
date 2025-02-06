import os
import grequests
from flask import Blueprint, request, jsonify
from flask_cors import CORS
import re

directory_blueprint = Blueprint("directory", __name__)
CORS(directory_blueprint, resources={r"/*": {"origins": "http://localhost:5173"}})


def directories_file(file):
    with open(file, "r", encoding="utf-8") as file:
        directories = [line.strip() for line in file if line.strip()]
    return directories


def check_directories(url, directories):
    urls = [url + directory for directory in directories]
    requests_list = (grequests.get(i, timeout=5) for i in urls)
    responses = grequests.map(requests_list, exception_handler=exception_handler)

    results = []
    for url, response in zip(urls, responses):
        if response is None:
            status = "Error"
            code = None
        elif response.status_code == 200 and "Index of" in response.text:
            status = "Open Directory"
            code = 200
        elif response.status_code == 200:
            status = "Exists (No Open Index)"
            code = 200
        elif 300 <= response.status_code < 400:
            status = f"Redirection ({response.status_code})"
            code = response.status_code
        else:
            status = f"Not Found ({response.status_code})"
            code = response.status_code

        results.append({"URL": url, "Status Code": code, "Directory Status": status})

    filtered_results = [
        result
        for result in results
        if isinstance(result["Status Code"], int) and 200 <= result["Status Code"] < 300
    ]

    return filtered_results


def exception_handler(request, exception):
    print(f"Request failed: {request.url} - {str(exception)}")


def is_valid_url(url):

    pattern = re.compile(r"^(https?://)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(/.*)?$")
    return pattern.match(url)


@directory_blueprint.route("/scan", methods=["POST"])
def scan():
    data = request.get_json()
    url = data.get("url")

    if not url:
        return jsonify({"error": "Provide a valid 'url'."}), 400

    if not is_valid_url(url):
        return jsonify({"error": "Invalid URL format."}), 400

    if not url.startswith("http://") and not url.startswith("https://"):
        url = "https://" + url

    try:
        base_dir = os.path.dirname(os.path.abspath(__file__))
        directories_path = os.path.join(base_dir, "directories.txt")
        directories = directories_file(directories_path)
    except FileNotFoundError as e:
        return jsonify({"error": str(e)}), 400

    results = check_directories(url, directories)

    if not results:
        return jsonify({"message": "No open directories found."}), 404

    return jsonify({"results": results}), 200
