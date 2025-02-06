export async function directoryScan(url) {
  try {
    const res = await fetch(`http://localhost:7288/app/directory/scan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'Failed to scan directories');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return { error: error.message };
  }
}
