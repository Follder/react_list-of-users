import { useSelector } from "react-redux";
import { State } from "../types/State";
import { UserItem } from "./UserItem";
import { Filter } from "../types/Filter";
import { capitalizeCase } from "../utils/capitalizeCase";

export const UserList = () => {
  const users = useSelector((state: State) => state.filteredUsers);

  return (
    <div className="px-4 py-2 bg-white rounded-xl min-w-[max-content]">
      <div className="text-base text-gray-800 grid grid-cols-4 text-sm font-bold">
        <div className="px-3 py-3 sticky left-0 bg-white">{capitalizeCase(Filter.NAME)}:</div>
        <div className="px-3 py-3">{capitalizeCase(Filter.USER_NAME)}:</div>
        <div className="px-3 py-3">{capitalizeCase(Filter.EMAIL)}:</div>
        <div className="px-3 py-3">{capitalizeCase(Filter.PHONE)}:</div>
      </div>

      {users.map((item) => {
        return <UserItem user={item} key={item.id} />;
      })}
    </div>
  );
};
