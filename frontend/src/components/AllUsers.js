import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../Queries/gqlQueries";
import "./AllUsers.css";

export const AllUsers = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS, {
    fetchPolicy: "cache-first",
    pollInterval: 500,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

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
