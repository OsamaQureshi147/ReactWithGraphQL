import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_USER_ARGS } from "../Queries/gqlQueries";

const userInitialState = {
  name: "",
  email: "",
  designation: "",
};

export const CreateUser = () => {
  const [user, setUser] = useState(userInitialState);

  const { name, email, designation } = user;

  const onChangeHandler = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });
  const [addUser, { data }] = useMutation(CREATE_USER_ARGS);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser({
            variables: {
              name,
              email,
              designation,
            },
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
