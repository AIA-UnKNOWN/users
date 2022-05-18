import camelCaseKeys from 'camelcase-keys';

import logUserRequest from '@APIs/logger/userRequest';

const URL = '/api/users';

export default async (callback) => {
  try {
    const response = await fetch(URL);
    const users = await response.json();
    callback(camelCaseKeys(users));
    logUserRequest(URL, users);
  } catch(error) {
    console.error(error);
    logUserRequest(URL, error);
  }
}