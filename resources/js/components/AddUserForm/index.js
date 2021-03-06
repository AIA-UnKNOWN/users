import useAddUserForm from './hook';
import TextInput from '@common/TextInput';

const AddUserForm = () => {
  const {
    firstname, setFirstname,
    lastname, setLastname,
    firstnameError, lastnameError,
    addNewUser
  } = useAddUserForm();

  return (
    <div>
      <div className="py-5">
        <TextInput
          label="Firstname"
          id="firstname"
          placeholder="Enter your firstname"
          value={firstname}
          onChange={e => setFirstname(e.target.value)}
        />
        <span className="text-danger mb-3">{firstnameError}</span>
        <TextInput
          label="Lastname"
          id="lastname"
          placeholder="Enter your lastname"
          value={lastname}
          onChange={e => setLastname(e.target.value)}
        />
        <span className="text-danger mb-3">{lastnameError}</span>
        <div className="mt-3">
          <button
            type="button"
            className="btn btn-primary px-4"
            onClick={addNewUser}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUserForm;