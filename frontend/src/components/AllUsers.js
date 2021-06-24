import "./AllUsers.css";

export const AllUsers = ({ data }) => {
  return (
    <table className="table__class">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Designation</th>
      </tr>
      {data.getAllUsers.map(({ id, name, email, designation }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{designation}</td>
          </tr>
        );
      })}
    </table>
  );
};
