import { ControlFilter } from "./ControlFilter";
import { SearchFilter } from "./SearchFilter";

export const UserFilter = () => {
  return (
    <div className="w-full md:w-auto py-8 self-end flex gap-6">
      <ControlFilter />
      <SearchFilter />
    </div>
  );
};
