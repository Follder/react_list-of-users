import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersFetched } from "../actions";
import { State } from "../types/State";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state: State) => state.users);

  console.log(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(usersFetched(json)))
      .catch((error) => console.error('Error fetching users:', error));
  }, [dispatch]);

  return (
    <div className="bg-slate-200 h-screen">
      <div className="container mx-auto px-4 pt-10 flex flex-col">
        <h1>User table</h1>

        <div className="py-8 self-end flex gap-6">
          <select id="filter" className="px-2 py-2 text-sm shadow-md rounded-md w-32">
            <option value="name">Name</option>
            <option value="username">Username</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
          <input type="text" className="px-2 py-2 text-sm shadow-md rounded-md w-56" />
        </div>

        <div className="bg-white rounded-2xl shadow-md">
          <div className="text-base text-gray-800 grid grid-cols-4 text-sm font-bold">
            <div className="px-8 py-3">Name:</div>
            <div className="px-8 py-3">Username:</div>
            <div className="px-8 py-3">Email:</div>
            <div className="px-8 py-3">Phone:</div>
          </div>
          <div className="border-t text-base text-gray-400 grid grid-cols-4">
            <div className="px-8 py-3 text-gray-800">{users[0]?.name}</div>
            <div className="px-8 py-3">{users[0]?.username}</div>
            <div className="px-8 py-3">{users[0]?.email}</div>
            <div className="px-8 py-3">{users[0]?.phone}</div>
          </div>
          <div className="border-t text-base text-gray-400 grid grid-cols-4">
            <div className="px-8 py-3 text-gray-800">{users[0]?.name}</div>
            <div className="px-8 py-3">{users[0]?.username}</div>
            <div className="px-8 py-3">{users[0]?.email}</div>
            <div className="px-8 py-3">{users[0]?.phone}</div>
          </div>
          <div className="border-t text-base text-gray-400 grid grid-cols-4">
            <div className="px-8 py-3 text-gray-800">{users[0]?.name}</div>
            <div className="px-8 py-3">{users[0]?.username}</div>
            <div className="px-8 py-3">{users[0]?.email}</div>
            <div className="px-8 py-3">{users[0]?.phone}</div>
          </div>
          <div className="border-t text-base text-gray-400 grid grid-cols-4">
            <div className="px-8 py-3 text-gray-800">{users[0]?.name}</div>
            <div className="px-8 py-3">{users[0]?.username}</div>
            <div className="px-8 py-3">{users[0]?.email}</div>
            <div className="px-8 py-3">{users[0]?.phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
