import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query GetAllUSersData {
    getAllUsers {
      id
      name
      email
      designation
    }
  }
`;

export const GET_DATA_BY_ID = gql`
  query GetDataByID {
    getUserById(id: 2) {
      name
      email
    }
  }
`;

export const GET_DATA_BY_ID_ARGS = gql`
  query GetDataByIDArg($id: Int!) {
    getUserById(id: $id) {
      name
      email
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser {
    createUser(
      name: "Faizan"
      email: "faizan@gmail.com"
      designation: "MERN Stack Developer"
    ) {
      name
      email
      designation
    }
  }
`;

export const CREATE_USER_ARGS = gql`
  mutation CreateUserWithArgs(
    $name: String!
    $email: String!
    $designation: String!
  ) {
    createUser(name: $name, email: $email, designation: $designation) {
      name
      email
      designation
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser {
    updateUser(
      id: 1
      name: "Faizan"
      email: "faizan@gmail.com"
      designation: "Developer"
    ) {
      name
      email
      designation
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser {
    deleteUser(id: 1) {
      name
      email
    }
  }
`;

export const HELLO_WORLD = gql`
  query helloWorld {
    hello
  }
`;
