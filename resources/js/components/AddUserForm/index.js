import TextInput from '@common/TextInput';

const AddUserForm = () => {
  return (
    <div>
      <div className="py-5">
        <TextInput
          label="Firstname"
          id="firstname"
          placeholder="Enter your firstname"
          value={""}
          onChange={e => console.log(e.target.value)}
        />
        <TextInput
          label="Lastname"
          id="lastname"
          placeholder="Enter your lastname"
          value={""}
          onChange={e => console.log(e.target.value)}
        />
        <div className="mt-3">
          <button type="button" className="btn btn-primary px-4">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUserForm;