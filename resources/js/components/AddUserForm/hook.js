import { useState } from 'react';

import addUser from '@APIs/addUser';
import getUsers from '@APIs/getUsers';
import useUsersTable from '../UsersTable/hook';

const useAddUserForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const { setUsers } = useUsersTable();

  const addNewUser = () => {
    addUser({ firstname, lastname }, response => {
      if (response === 201) getUsers(users => {
        setUsers(users);
      });
    });
  }

  return {
    firstname, setFirstname,
    lastname, setLastname,
    addNewUser
  };
}

export default useAddUserForm;