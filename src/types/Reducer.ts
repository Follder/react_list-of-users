import { Filter } from "./Filter";
import { User } from "./User";

export enum ActionTypes {
  USERS_FETCHING = "USERS_FETCHING",
  USERS_FETCHED = "USERS_FETCHED",
  USERS_FETCHING_ERROR = "USERS_FETCHING_ERROR",
  ACTIVE_FILTER_CHANGED = "ACTIVE_FILTER_CHANGED",
  QUERY_CHANGED = "QUERY_FILTER_CHANGED"
}

export interface UsersFetchingAction {
  type: ActionTypes.USERS_FETCHING;
}

export interface UsersFetchedAction {
  type: ActionTypes.USERS_FETCHED
  payload: User[];
}

export interface UsersFetchingErrorAction {
  type: ActionTypes.USERS_FETCHING_ERROR
}

export interface ActiveFilterChangedAction {
  type: ActionTypes.ACTIVE_FILTER_CHANGED
  payload: Filter;
}

export interface QueryFilterChangedAction {
  type: ActionTypes.QUERY_CHANGED
  payload: string;
}

export type Action =
  | UsersFetchingAction
  | UsersFetchedAction
  | UsersFetchingErrorAction
  | ActiveFilterChangedAction
  | QueryFilterChangedAction;