import { Link } from 'react-router-dom';
import Logo from './Logo';

function Home() {
  return (
    <div className="mx-auto max-w-7xl flex-1 bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="flex justify-center gap-2 text-3xl text-gray-800">
          <span className="font-bold">Welcome to</span> <Logo></Logo>
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          We provide website to detect viruses, security vulnerabilities, open
          directories, and scan for open ports in your system, all equipped with
          advanced scanning.
        </p>
      </div>

      {/* Comprehensive detection */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Comprehensive Detection
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          <li>Real-time malware and virus detection.</li>
          <li>Directory scanning for hidden threats.</li>
          <li>Vulnerability assessments to secure weak points.</li>
          <li>Open port scanning to identify potential security risks.</li>
        </ul>
      </div>

      {/* Features Section */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Virus Scan */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            <Link to="/virusscan" className="text-primary-0 underline">
              Virus Scan
            </Link>
          </h2>
          <p className="text-gray-700">
            Instantly scans your links and websites for viruses and malware.
          </p>
        </div>

        {/* Vulnerability Scan */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            <Link to="/vulnerabilityscan" className="text-primary-0 underline">
              Vulnerability Scan
            </Link>
          </h2>
          <p className="text-gray-700">
            Evaluates potential security weaknesses, including risks like XSS,
            SQL injection, LFI, RFI, and command injection.
          </p>
        </div>

        {/* Directory Scan */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            <Link to="/directoryscan" className="text-primary-0 underline">
              Directory Scan
            </Link>
          </h2>
          <p className="text-gray-700">
            Identifies open directories on your website.
          </p>
        </div>

        {/* Site Info */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            <Link to="/siteinfo" className="text-primary-0 underline">
              Site Info Scan
            </Link>
          </h2>
          <p className="text-gray-700">
            Provides detailed information about the site, including open ports
            and other security-relevant details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
