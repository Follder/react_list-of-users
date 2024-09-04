import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersFetched } from "../actions";

function App() {
  const dispatch = useDispatch();
  const { store } = useSelector(state => state);

  console.log(store)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(usersFetched(json)));
  });

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline">Hello, Tailwind CSS!</h1>
    </div>
  );
}

export default App;
