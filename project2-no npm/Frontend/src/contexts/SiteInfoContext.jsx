import { createContext, useContext, useState } from 'react';

const SiteInfoContext = createContext();

function SiteInfoProvider({ children }) {
  const [nmapResult, setNmapResult] = useState(null);
  const [whoisResult, setWhoisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleScan(target) {
    setIsLoading(true);
    setNmapResult(null);
    setWhoisResult(null);

    try {
      const response = await fetch(
        `http://localhost:7288/app/nmap/scan?target=${target}`,
      );
      const data = await response.json();
      if (data.error) {
        setNmapResult(`Error: ${data.error}`);
        setWhoisResult(`Error: ${data.error}`);
      } else {
        setNmapResult(
          data.result
            .split('--- Whois Result ---')[0]
            .trim()
            .split('--- Nmap Result ---')[1],
        );
        setWhoisResult(data.result.split('--- Whois Result ---')[1].trim());
      }
    } catch (error) {
      setNmapResult(`Error: ${error.massage}`);
      setWhoisResult(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SiteInfoContext.Provider
      value={{ handleScan, isLoading, nmapResult, whoisResult }}
    >
      {children}
    </SiteInfoContext.Provider>
  );
}

function useSiteInfo() {
  const context = useContext(SiteInfoContext);
  if (context === undefined)
    throw new Error('SiteInfoContext was used outside the SiteInfoProvider');
  return context;
}

export { SiteInfoProvider, useSiteInfo };
