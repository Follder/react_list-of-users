import { User } from "./User";

export interface State {
  users: User[];
  usersLoadingStatus: string;
  activeFilter: string;
  filteredUsers: User[];
}