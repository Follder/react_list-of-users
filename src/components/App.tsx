import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersFetched, usersFetching, usersFetchingError } from "../actions";
import { State } from "../types/State";
import { UserList } from "./UserList";
import { UserFilter } from "./UserFilter";
import { Title } from "./Title";
import { Spinner } from "./Spinner";

function App() {
  const dispatch = useDispatch();
  const usersLoadingStatus = useSelector((state: State) => state.usersLoadingStatus);

  useEffect(() => {
    dispatch(usersFetching());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(usersFetched(json)))
      .catch(() => dispatch(usersFetchingError()));
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-tr from-sky-200 from-10% via-sky-100 via-70% to-emerald-100 to-90% h-screen">
      {usersLoadingStatus === "loading" ? (
        <div className="flex items-center h-full justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="container mx-auto px-4 pt-10 flex flex-col">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <Title />
            <UserFilter />
          </div>

          <div className="overflow-x-scroll lg:overflow-x-hidden mt-8 shadow-md rounded-xl">
            <UserList />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
