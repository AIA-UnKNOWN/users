import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '@reducers/usersSlice';

import addUser from '@APIs/addUser';
import getUsers from '@APIs/getUsers';

const useAddUserForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const dispatch = useDispatch();

  const addNewUser = () => {
    addUser({ firstname, lastname }, response => {
      if (response === 201) getUsers(users => {
        dispatch(setUsers(users));
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