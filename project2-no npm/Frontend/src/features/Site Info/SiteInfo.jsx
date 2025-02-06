import { useSiteInfo } from '../../contexts/SiteInfoContext';
import Heading from '../../ui/Heading';
import VideoLoader from '../../ui/VideoLoader';
import Nmap from './Nmap';
import ScanUrl from './ScanUrl';
import Whois from './Whois';

function SIteInfo() {
  const { isLoading } = useSiteInfo();

  return (
    <div className="flex-1 bg-gray-50 p-5 pt-9">
      <Heading>Site info scan</Heading>
      <ScanUrl />
      {isLoading ? (
        <VideoLoader />
      ) : (
        <>
          <Nmap />
          <Whois />
        </>
      )}
    </div>
  );
}

export default SIteInfo;
