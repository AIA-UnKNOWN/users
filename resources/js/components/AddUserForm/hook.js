import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '@reducers/usersSlice';

import addUser from '@APIs/addUser';
import getUsers from '@APIs/getUsers';

const useAddUserForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const dispatch = useDispatch();

  const validate = () => {
    const error = {};
    if (firstname === '') error.firstnameError = 'Firstname is required';
    if (lastname === '') error.lastnameError = 'Lastname is required';
    setFirstnameError(error.firstnameError);
    setLastnameError(error.lastnameError);
    return Object.keys(error).length === 0;
  }

  const addNewUser = () => {
    if (!validate()) return;
    addUser({ firstname, lastname }, response => {
      if (response === 201) getUsers(users => {
        dispatch(setUsers(users));
      });
    });
  }

  return {
    firstname, setFirstname,
    lastname, setLastname,
    firstnameError, setFirstnameError,
    lastnameError, setLastnameError,
    addNewUser
  };
}

export default useAddUserForm;