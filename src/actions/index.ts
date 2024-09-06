import { User } from "../types/User"
import { ActionTypes } from "../types/Reducer"
import { Filter } from "../types/Filter"

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

export const activeFilterChanged = (filter: Filter) => {
  return {
      type: ActionTypes.ACTIVE_FILTER_CHANGED,
      payload: filter
  }
}

export const queryFilterChanged = (filter: string) => {
  return {
    type: ActionTypes.QUERY_CHANGED,
    payload: filter
  }
}