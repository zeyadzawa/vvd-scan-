import Error from '../../ui/Error';

function ScanResultsTable({ scanData }) {
  if (scanData.error) return <Error />;

  return (
    <div className="c">
      <div className="my-5 flex justify-center text-center">
        <p
          className={`${scanData?.safetyStatus?.toLowerCase() === 'safe' ? 'text-green-500' : 'text-red-600'} w-fit p-3 font-poppins shadow-primary`}
        >
          {scanData?.safetyStatus}, {scanData?.message}
        </p>
      </div>
      <table className="min-w-full border border-gray-200 bg-white">
        <thead>
          <tr className="text-left">
            <th className="border-b bg-gray-100 px-4 py-2">Scanner</th>
            <th className="border-b bg-gray-100 px-4 py-2">Detected</th>
            <th className="border-b bg-gray-100 px-4 py-2">Result</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(scanData.scans)?.map(([scanner, details], index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border-b px-4 py-2">{scanner}</td>
              <td className="border-b px-4 py-2">
                {details.detected ? (
                  <span className="text-red-500">Yes</span>
                ) : (
                  <span className="text-green-500">No</span>
                )}
              </td>
              <td className="border-b px-4 py-2">{details.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScanResultsTable;
