import { Filter } from "../types/Filter";
import { Action, ActionTypes } from "../types/Reducer";
import { State } from "../types/State";
import { filtered } from "../utils/filtered";

const initialState: State = {
  users: [],
  usersLoadingStatus: "idle",
  activeFilter: Filter.ALL,
  queryFilter: '',
  filteredUsers: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.USERS_FETCHING :
      return {
        ...state,
        usersLoadingStatus: "loading",
      };

    case ActionTypes.USERS_FETCHED:
      return {
        ...state,
        users: action.payload,
        filteredUsers: action.payload,
        usersLoadingStatus: "idle",
      };

    case ActionTypes.USERS_FETCHING_ERROR :
      return {
        ...state,
        usersLoadingStatus: "error",
      };

    case ActionTypes.ACTIVE_FILTER_CHANGED:
      return {
        ...state,
        activeFilter: action.payload,
        filteredUsers: filtered(state.users, action.payload, state.queryFilter)
      };

    case ActionTypes.QUERY_CHANGED:
      return {
        ...state,
        queryFilter: action.payload,
        filteredUsers: filtered(state.users, state.activeFilter, action.payload)
      }

    default:
      return state;
  }
};

export default reducer;
