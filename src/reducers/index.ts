import { Action, ActionTypes } from "../types/Reducer";
import { State } from "../types/State";

const initialState: State = {
  users: [],
  usersLoadingStatus: "idle",
  activeFilter: "all",
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
        // filteredUsers:
        //   state.activeFilter === "all"
        //     ? action.payload
        //     : action.payload.filter(
        //         (item) => item.name === state.activeFilter
        //       ),
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
        // filteredUsers:
        //   action.payload === "all"
        //     ? state.users
        //     : state.users.filter((item) => item.name === action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
