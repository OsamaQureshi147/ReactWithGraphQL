import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_USER_ARGS } from "../Queries/gqlQueries";

const userInitialState = {
  name: "",
  email: "",
  designation: "",
};

export const CreateUser = ({ addUser }) => {
  const [user, setUser] = useState(userInitialState);

  const onChangeHandler = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser({
            variables: user,
          });
          setUser(userInitialState);
        }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={user.name}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={user.email}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="text"
          placeholder="Enter Designation"
          name="designation"
          value={user.designation}
          onChange={(e) => onChangeHandler(e)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};
