import camelCaseKeys from 'camelcase-keys';

const URL = '/api/users';

export default async (callback) => {
  try {
    const response = await fetch(URL);
    const users = await response.json();
    callback(camelCaseKeys(users));
  } catch(error) {
    console.error(error);
  }
}