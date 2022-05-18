import { useState, useEffect } from 'react';

import getUsers from '@APIs/getUsers';

const useUsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(users => {
      setUsers(users);
    });
  }, []);

  return { users };
}

export default useUsersTable;