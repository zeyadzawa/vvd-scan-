import { Form, useActionData, useNavigation } from 'react-router-dom';
import Heading from '../../ui/Heading';
import ScanFrom from '../../ui/ScanFrom';
import { virusScan } from '../../services/apiVirusTotal';
import ScanResultsTable from './ScanResultTable';
import VideoLoader from '../../ui/VideoLoader';

function VirusScan() {
	const scanResult = useActionData();
	const navigation = useNavigation();

	return (
    <div className="flex-1 bg-gray-50 pt-9">
      <Heading>Virus scan</Heading>
      <Form method="POST">
        <ScanFrom isSubmitting={navigation.state} />
      </Form>
      {/* {navigation.state === 'submitting' && <Loader />} */}
      {navigation.state === 'submitting' && <VideoLoader />}
      {scanResult && navigation.state === 'idle' && (
        <ScanResultsTable scanData={scanResult} />
      )}
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  if (!data?.url) return null;
  const scanResult = await virusScan(data.url);
  return scanResult;
}

export default VirusScan;
