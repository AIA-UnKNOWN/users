const URL = '/api/add-user';

export default async ({ firstname, lastname }, callback) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').value
      },
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname
      })
    });
    callback(await response.json());
  } catch (error) {
    console.error(error);
  }
}