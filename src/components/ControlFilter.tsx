import { useDispatch } from "react-redux";
import { activeFilterChanged } from "../actions";
import { Filter } from "../types/Filter";
import { capitalizeCase } from '../utils/capitalizeCase'

export const ControlFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-1/2 md:w-32 relative inline-block">
      <select
        id="filter"
        onChange={(e) => {dispatch(activeFilterChanged(e.target.value as Filter))}}
        className="px-2 py-2 text-sm shadow-md rounded-md w-full appearance-none leading-tight focus:outline-none focus:ring-2 focus:ring-slave-500 focus:border-slave-500 cursor-pointer"
      >
        <option value={Filter.ALL}>{capitalizeCase(Filter.ALL)}</option>
        <option value={Filter.NAME}>{capitalizeCase(Filter.NAME)}</option>
        <option value={Filter.USER_NAME}>{capitalizeCase(Filter.USER_NAME)}</option>
        <option value={Filter.EMAIL}>{capitalizeCase(Filter.EMAIL)}</option>
        <option value={Filter.PHONE}>{capitalizeCase(Filter.PHONE)}</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
