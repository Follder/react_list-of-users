import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersFetched } from "../actions";
import { State } from "../types/State";


function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((state: State) => state);

  console.log(users)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(usersFetched(json)));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="flex">
        <div>{users[0].name}</div>
        <div>{users[0].username}</div>
        <div>{users[0].email}</div>
        <div>{users[0].phone}</div>
      </div>
      <h1 className="text-3xl font-bold underline">Hello, Tailwind CSS!</h1>
    </div>
  );
}

export default App;
