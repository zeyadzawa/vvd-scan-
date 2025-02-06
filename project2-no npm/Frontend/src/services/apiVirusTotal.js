export async function virusScan(url) {
  const API_KEY =
    'ea5f1817fd13f0a4bbede57fbd49b5e9c13e7732be5cd40d3758be04783ca1ac';
  const corsProxy = 'https://thingproxy.freeboard.io/fetch/';

  try {
    const scanUrlEndpoint =
      corsProxy + 'https://www.virustotal.com/vtapi/v2/url/scan';
    const reportUrlEndpoint =
      corsProxy + 'https://www.virustotal.com/vtapi/v2/url/report';

    const scanRequest = await fetch(scanUrlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        apikey: API_KEY,
        url,
      }),
    });

    const rawResponse = await scanRequest.text();
    const scanData = JSON.parse(rawResponse);
    const scanId = scanData.scan_id;

    if (scanId) {
      // Poll for the report instead of waiting a fixed amount of time
      const checkReport = async (scanId) => {
        let reportData;
        for (let i = 0; i < 5; i++) {
          // Try up to 5 times
          const reportResponse = await fetch(
            `${reportUrlEndpoint}?apikey=${API_KEY}&resource=${scanId}`,
          );
          reportData = await reportResponse.json();

          // If the report is available (check for the response's success)
          if (reportData.response_code === 1) {
            return reportData; // Return report data if found
          }

          await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait 3 seconds before retrying
        }
        return { error: 'Report not available after multiple attempts.' }; // Return an error if not found
      };

      const reportData = await checkReport(scanId);

      const positives = reportData.positives || 0;
      const total = reportData.total || 0;

      return {
        ...reportData,
        safetyStatus: positives === 0 ? 'Safe' : 'Unsafe',
        message:
          positives === 0
            ? 'The URL is safe. No threats detected.'
            : `Warning: ${positives} out of ${total} scans detected threats.`,
      };
    } else {
      return { error: 'Failed to get scan ID' };
    }
  } catch (error) {
    return { error: 'An error occurred while scanning the URL.' };
  }
}
