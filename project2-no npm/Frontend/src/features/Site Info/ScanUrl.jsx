import { useState } from 'react';
import { useSiteInfo } from '../../contexts/SiteInfoContext';
import Button from '../../ui/Button';

function ScanUrl() {
  const [url, setUrl] = useState('');
  const { handleScan, isLoading } = useSiteInfo();
	
  return (
    <form
      className="text-center"
      onSubmit={(e) => {
        e.preventDefault();
        handleScan(url);
      }}
    >
      <input
        type="url"
        name="url"
        className="mr-2 w-80 rounded border-2 border-stone-200 px-2 py-[6px] text-stone-700 outline-2 outline-slate-200"
        placeholder="Enter target IP or domain"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <Button isSubmitting={isLoading}>Scan</Button>
    </form>
  );
}

export default ScanUrl;
