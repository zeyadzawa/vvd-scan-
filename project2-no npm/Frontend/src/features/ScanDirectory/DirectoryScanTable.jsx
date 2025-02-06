import Error from '../../ui/Error';

function DirectoryScanTable({ scanData }) {

  if (scanData?.error) return <Error />;
  if (scanData?.results?.length === 0) return <p>No directories to scan</p>;

  return (
    <table className="mt-10 min-w-full border border-gray-200 bg-white">
      <thead>
        <tr className="text-left">
          <th className="border-b bg-gray-100 px-4 py-2">URL</th>
          <th className="border-b bg-gray-100 px-4 py-2">Status Code</th>
        </tr>
      </thead>
      <tbody>
        {scanData?.results?.map((data, index) => (
          <tr key={index} className="hover:bg-gray-50">
            {/* <td className="border-b px-4 py-2">{data['Status Code']}</td> */}
            <td className="border-b px-4 py-2">{data['URL']}</td>
            <td className="border-b px-4 py-2">
              <span
                className={
                  +data['Status Code'] < 300
                    ? 'text-green-500'
                    : 'text-green-500'
                }
              >
                {data['Status Code']}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DirectoryScanTable;
