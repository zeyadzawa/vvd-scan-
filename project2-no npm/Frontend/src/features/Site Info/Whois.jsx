import { useSiteInfo } from '../../contexts/SiteInfoContext';

import WhoisTable from './whoisTable';

function Whois() {
  const { whoisResult } = useSiteInfo();
  return (
    <div className="container mx-auto p-4">
      {whoisResult && (
        <>
          <h1 className="mb-4 text-2xl font-bold capitalize text-primary-0">
            Information about the website
          </h1>
          <div className="mt-4 rounded border border-gray-300 bg-gray-50 p-4">
            <WhoisTable />
          </div>
        </>
      )}
    </div>
  );
}

export default Whois;
