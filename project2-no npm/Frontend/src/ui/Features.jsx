function Features() {
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Virus Scanning Section */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Virus Scanning for URLs
          </h2>
          <ol className="list-inside list-decimal space-y-2 text-gray-700">
            <li>
              Go to the <strong>Virus Scan</strong> section.
            </li>
            <li>Enter the URL you want to scan.</li>
            <li>
              Click <strong>Scan</strong>.
            </li>
            <li>
              Review the report for detected threats and suggested actions.
            </li>
          </ol>
        </div>

        {/* Directory Scanning Section */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Directory Scanning for URLs
          </h2>
          <ol className="list-inside list-decimal space-y-2 text-gray-700">
            <li>
              Go to the <strong>Directory Scan</strong> tab.
            </li>
            <li>Enter the URL of the directory you wish to scan.</li>
            <li>
              Click <strong>Scan</strong> to check for vulnerabilities.
            </li>
            <li>Receive a detailed report with issues identified.</li>
          </ol>
        </div>

        {/* Vulnerability Assessment Section */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Vulnerability Assessment for URLs
          </h2>
          <ol className="list-inside list-decimal space-y-2 text-gray-700">
            <li>
              Go to the <strong>Vulnerability Scan</strong> section.
            </li>
            <li>Enter the URL to be assessed.</li>
            <li>
              Click <strong>Scan</strong> to detect any vulnerabilities.
            </li>
            <li>A report will show findings and suggested fixes.</li>
          </ol>
        </div>
        {/* Site info Assessment Section */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Site Info Scan
          </h2>
          <ol className="list-inside list-decimal space-y-2 text-gray-700">
            <li>
              Go to the <strong>Site Info</strong> section.
            </li>
            <li>
              Select the <strong>Tool</strong> that you want.
            </li>
            <li>
              Click <strong>Start</strong> to start the tool.
            </li>
            <li>A report will show findings and suggested fixes.</li>
          </ol>
        </div>
      </div>
      {/* Understanding Reports Section */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Understanding Your Reports
        </h2>
        <p className="text-gray-700">Each scan report includes:</p>
        <ul className="list-inside list-disc space-y-2 text-gray-700">
          <li>
            <strong>Threat Level</strong>: Severity of the issue.
          </li>
          <li>
            <strong>Description</strong>: Explanation of the problem.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Features;
