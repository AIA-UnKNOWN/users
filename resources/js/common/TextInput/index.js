const TextInput = ({ label, id, placeholder, value, onChange }) => {
  return (
    <div>
      <label htmlFor=""
        className="form-label"
      >{label}</label>
      <input
        className="form-control"
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;