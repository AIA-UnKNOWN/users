const URL = '/api/log';

export default async (url, responseData) => {  
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').value
      },
      body: JSON.stringify({ url, responseData: String(responseData) })
    });
    console.log(await response.json())
    if (!response.ok) return;
    console.log(`Logged:\n\tURL: ${url}\n\tResponse Data: ${responseData}`);
  } catch(error) {
    console.error(error);
  }
}