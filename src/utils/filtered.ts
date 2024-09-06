import { Filter } from "../types/Filter";
import { User } from "../types/User";

export const filtered = (users: User[], activeFilter: Filter, query = '') => {
  const normilizeQuery = query.trim();

  if (activeFilter === Filter.PHONE) {
    return users.filter((item) => {

      return query ? item[activeFilter].replace(/\D/g, '').includes(normilizeQuery) : true;
    })
  }

  if (activeFilter !== Filter.ALL) {
    return users.filter((item) => {

      return query ? item[activeFilter].toLowerCase().includes(normilizeQuery) : true;
    })
  } else {
    
    return users;
  }
}