const THead = () => {
  return (
    <thead className="bg-success">
      <tr>
        <th
          className="text-white px-3 py-2"
        >Id</th>
        <th
          className="text-white px-3 py-2"
        >Firstname</th>
        <th
          className="text-white px-3 py-2"
        >Lastname</th>
        <th
          className="text-white px-3 py-2"
        >Gender</th>
        <th
          className="text-white px-3 py-2"
        >Birthday</th>
      </tr>
    </thead>
  );
}

export default THead;