import {
  FETCH_USERS,
  SORT_USER_BY_AGE,
  SORT_USER_BY_CITY,
  SORT_USER_BY_EMAIL,
  SORT_USER_BY_NAME,
} from "./ActionTypes";
import { IUser } from "../store";

export const fetchUsers = (users: IUser[]) => {
  return {
    type: FETCH_USERS,
    payload: users,
  };
};

export const sortUsersByEmail = () => {
  return {
    type: SORT_USER_BY_EMAIL,
  };
};

export const sortUsersByCity = () => {
  return {
    type: SORT_USER_BY_CITY,
  };
};

export const sortUsersByName = () => {
  return {
    type: SORT_USER_BY_NAME,
  };
};

export const sortUsersByAge = () => {
  return {
    type: SORT_USER_BY_AGE,
  };
};
