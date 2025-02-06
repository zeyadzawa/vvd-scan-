import { useSiteInfo } from '../../contexts/SiteInfoContext';


function WhoisTable() {
  const { whoisResult } = useSiteInfo();

  // Check if whoisResult is a string and parse it
  const parsedResult =
    typeof whoisResult === 'string' ? JSON.parse(whoisResult) : whoisResult;

  if (!parsedResult) return null; // Return null if there's no result

  const keys = Object.keys(parsedResult);
  const values = Object.values(parsedResult);


  return (
    <div className="mb-4">
      {/* <h3 className="mb-2 text-lg font-semibold">Whois Information</h3> */}
      <table className="min-w-full border border-gray-200 bg-white">
        <tbody>
          {keys.map((key, index) => (
            <tr key={index} className="text-left">
              <th className="border-b bg-gray-100 px-4 py-2">{key}</th>
              <td className="border-b bg-gray-100 px-4 py-2">
                {JSON.stringify(values[index])}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WhoisTable;
