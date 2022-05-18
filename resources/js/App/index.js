import UsersTable from '@components/UsersTable';
import AddUserForm from '@components/AddUserForm';

const App = () => {
  return (
    <div className="container">
      <AddUserForm />
      <UsersTable />
    </div>
  );
}

export default App;