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
    <div className="bg-slate-300">

      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl">
          <div className="flex justify-between border text-base text-gray-400">
            <div className="px-8 py-2 text-gray-800">{users[0].name}</div>
            <div className="px-8 py-2">{users[0].username}</div>
            <div className="px-8 py-2">{users[0].email}</div>
            <div className="px-8 py-2">{users[0].phone}</div>
          </div>
          <div className="flex justify-between border text-base text-gray-400">
            <div className="px-8 py-2 text-gray-800">{users[0].name}</div>
            <div className="px-8 py-2">{users[0].username}</div>
            <div className="px-8 py-2">{users[0].email}</div>
            <div className="px-8 py-2">{users[0].phone}</div>
          </div>
          <div className="flex justify-between border text-base text-gray-400">
            <div className="px-8 py-2 text-gray-800">{users[0].name}</div>
            <div className="px-8 py-2">{users[0].username}</div>
            <div className="px-8 py-2">{users[0].email}</div>
            <div className="px-8 py-2">{users[0].phone}</div>
          </div>
          <div className="flex justify-between border text-base text-gray-400">
            <div className="px-8 py-2 text-gray-800">{users[0].name}</div>
            <div className="px-8 py-2">{users[0].username}</div>
            <div className="px-8 py-2">{users[0].email}</div>
            <div className="px-8 py-2">{users[0].phone}</div>
          </div>
          <div className="flex justify-between border text-base text-gray-400">
            <div className="px-8 py-2 text-gray-800">{users[0].name}</div>
            <div className="px-8 py-2">{users[0].username}</div>
            <div className="px-8 py-2">{users[0].email}</div>
            <div className="px-8 py-2">{users[0].phone}</div>
          </div>
        </div>
        <h1 className="text-3xl font-bold underline">Hello, Tailwind CSS!</h1>
      </div>
    </div>
  );
}

export default App;
