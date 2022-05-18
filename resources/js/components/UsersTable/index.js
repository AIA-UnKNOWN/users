import useUsersTable from "./hook";
import THead from './THead';

const UsersTable = () => {
  const { users } = useUsersTable();

  return (
    <div className="overflow-auto">
      <table
        className="w-100"
      >
        <THead />
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td
                className="px-3 py-2 border-bottom border-secondary"
              >{user.id}</td>
              <td
                className="px-3 py-2 border-bottom border-secondary"
              >{user.firstName}</td>
              <td
                className="px-3 py-2 border-bottom border-secondary"
              >{user.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;