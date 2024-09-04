import { Action, UsersFetchingAction, UsersFetchedAction, ActionTypes } from "../types/Reducer";


const initialState = {
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
    case "USERS_FETCHED":
      return {
        ...state,
        users: action.payload,
        filteredUsers:
          state.activeFilter === "all"
            ? action.payload
            : action.payload.filter(
                (item) => item.element === state.activeFilter
              ),
        usersLoadingStatus: "idle",
      };
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        usersLoadingStatus: "error",
      };

    case "ACTIVE_FILTER_CHANGED":
      return {
        ...state,
        activeFilter: action.payload,
        filteredUsers:
          action.payload === "all"
            ? state.users
            : state.users.filter((item) => item.element === action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
