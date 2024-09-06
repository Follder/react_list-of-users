import { useDispatch, useSelector } from "react-redux";
import { queryFilterChanged } from "../actions";
import { State } from "../types/State";
import { Filter } from "../types/Filter";

export const SearchFilter = () => {
  const dispatch = useDispatch();
  const queryFilter = useSelector((state: State) => state.queryFilter);
  const activeFilter = useSelector((state: State) => state.activeFilter);

  return (
    <div className="relative w-1/2 md:w-56">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l3.293 3.293a1 1 0 01-1.414 1.414l-3.293-3.293zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        type="text"
        className="px-10 py-2 text-sm shadow-md rounded-md w-full leading-tight focus:outline-none focus:ring-2 focus:ring-slave-500 focus:border-slave-500"
        placeholder="Search"
        value={queryFilter}
        onChange={(e) => dispatch(queryFilterChanged(e.target.value))}
        disabled={activeFilter === Filter.ALL}
      />
    </div>
  );
};
