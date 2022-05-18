import { useState, useEffect } from 'react';
import { setUsers } from '@reducers/usersSlice';
import { useSelector, useDispatch } from 'react-redux';

import getUsers from '@APIs/getUsers';

const useUsersTable = () => {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(users => {
      dispatch(setUsers(users));
    });
  }, []);

  return { users };
}

export default useUsersTable;