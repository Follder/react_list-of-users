import { User } from "../types/User";

type Props = {
  user: User;
}

export const UserItem: React.FC<Props> = ({ user }) => {

  return (
    <div className="border-t text-base text-gray-400 grid grid-cols-4">
      <div className="px-3 py-3 text-gray-800 text-balance sticky left-0 bg-white">
        {user.name}
      </div>
      <div className="px-3 py-3 text-nowrap">{user.username}</div>
      <div className="px-3 py-3 text-nowrap">{user.email}</div>
      <div className="px-3 py-3 text-wpar">{user.phone}</div>
    </div>
  );
};
