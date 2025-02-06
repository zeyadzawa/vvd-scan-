export function parseWhoisData(whoisResult) {
  const lines = whoisResult.split('\n');
  const data = lines
    .filter((line) => line.includes(':'))
    .map((line) => line.split(':').map((item) => item.trim()));

  const emailData = data.filter(([key]) => key.toLowerCase().includes('email'));
  const domainData = data.filter(([key]) =>
    key.toLowerCase().includes('domain'),
  );
  const dateData = data.filter(([key]) => key.toLowerCase().includes('date'));

  return { emailData, domainData, dateData };
}

export function formatValue(value) {
  if (!value || value.length === 0 || value === '[]') return 'null'; // عرض null عند عدم وجود قيمة
  if (Array.isArray(value)) return value.join(', '); // دمج القيم إذا كانت مصفوفة
  return value.toString().replace(/[\[\]"]/g, ''); // إزالة الأقواس وعلامات الاقتباس
}
