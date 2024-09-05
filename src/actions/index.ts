import { User } from "../types/User"
import { ActionTypes } from "../types/Reducer"

export const usersFetching = () => {
  return {
      type: ActionTypes.USERS_FETCHING
  }
}

export const usersFetched = (users: User[]) => {
  return {
      type: ActionTypes.USERS_FETCHED,
      payload: users,
  }
}

export const usersFetchingError = () => {
  return {
      type: ActionTypes.USERS_FETCHING_ERROR
  }
}

export const activeFilterChanged = (filter: string) => {
  return {
      type: ActionTypes.ACTIVE_FILTER_CHANGED,
      payload: filter
  }
}