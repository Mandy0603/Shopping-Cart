import { UPDATE_FILTER } from "./actionTypes";

export const updateFilters = filters => {
  return {
    type: UPDATE_FILTER,
    payload: filters
  };
};
