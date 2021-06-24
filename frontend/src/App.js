import { useMutation, useQuery } from "@apollo/client";
import "./App.css";
import { AllUsers } from "./components/AllUsers";
import { CreateUser } from "./components/CreateUser";
import { CREATE_USER_ARGS, GET_ALL_USERS } from "./Queries/gqlQueries";

function App() {
  //useQuery to get all users
  const { loading, error, data, refetch } = useQuery(GET_ALL_USERS, {
    fetchPolicy: "network-only",
  });

  //useMutation to add user
  const [addUser, { data_mutation }] = useMutation(CREATE_USER_ARGS, {
    onCompleted: () => refetch(),
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <AllUsers data={data} />
      <CreateUser addUser={addUser} />
    </div>
  );
}

export default App;
