import logUserRequest from '@APIs/logger/userRequest';

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
    const data = await response.json();
    callback(data);
    logUserRequest(URL, data);
  } catch (error) {
    console.error(error);
    logUserRequest(URL, error);
  }
}