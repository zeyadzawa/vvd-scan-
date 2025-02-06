import { Form, useActionData, useNavigation } from 'react-router-dom';
import Heading from '../../ui/Heading';
import ScanFrom from '../../ui/ScanFrom';
import { directoryScan } from '../../services/directoryApi';
import VideoLoader from '../../ui/VideoLoader';
import DirectoryScanTable from './DirectoryScanTable';
import validator from 'validator';
import Error from '../../ui/Error';

function DirectoryScan() {
  const scanResult = useActionData();
  const navigation = useNavigation();

  console.log(scanResult);

  return (
    <div className="flex-1 bg-gray-50 pt-9">
      <Heading>Directory scan</Heading>
      <Form method="POST">
        <ScanFrom isSubmitting={navigation.state} />
      </Form>
      {navigation.state === 'submitting' && <VideoLoader />}
      {scanResult?.message && navigation.state === 'idle' && (
        <Error> {scanResult?.message}</Error>
      )}
      {!scanResult?.message && scanResult && navigation.state === 'idle' && (
        <DirectoryScanTable scanData={scanResult} />
      )}
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  if (!data?.url) return null;

  if (!validator.isURL(data?.url)) return { message: 'Provide a valid Url' };

  const directoryData = await directoryScan(data.url);
  return directoryData;
}

export default DirectoryScan;
