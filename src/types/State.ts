import { Filter } from "./Filter";
import { User } from "./User";

export interface State {
  users: User[];
  usersLoadingStatus: string;
  activeFilter: Filter;
  queryFilter: string;
  filteredUsers: User[];
}