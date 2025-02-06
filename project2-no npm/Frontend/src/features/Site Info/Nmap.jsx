import { useSiteInfo } from '../../contexts/SiteInfoContext';

function Nmap() {
  const { nmapResult } = useSiteInfo();

  return (
    <div className="container mx-auto p-4">
      {nmapResult && (
        <>
          <h1 className="mb-4 text-2xl font-bold capitalize text-primary-0">
            open ports
          </h1>
          <div className="mt-4 rounded border border-gray-300 bg-gray-50 p-4">
            <pre className="mt-2 whitespace-pre-wrap">
              {highlightPorts(nmapResult)}
            </pre>
          </div>
        </>
      )}
    </div>
  );
}

function highlightPorts(nmapResult) {
  const lines = nmapResult.split('\n');
  return lines.map((line, index) => (
    <p
      key={index}
      className={
        line.includes('open') ? 'font-semibold text-green-600' : 'text-gray-800'
      }
    >
      {line.includes('open') ? line : ''}
      {/* {line} */}
    </p>
  ));
}

export default Nmap;
