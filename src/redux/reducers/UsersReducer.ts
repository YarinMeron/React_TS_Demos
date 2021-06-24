import { IUser } from "../store";
import {
  ADD_USER,
  CLEAN_USERS,
  FETCH_USERS,
  SORT_USER_BY_AGE,
  SORT_USER_BY_CITY,
  SORT_USER_BY_EMAIL,
  SORT_USER_BY_NAME,
} from "../actions/ActionTypes";
import { getUsersPredicate } from "../../utils/predicates";

export interface IUsersState {
  people: IUser[];
}

const initialState: IUsersState = {
  people: [],
};

export type ActionType =
  | { type: typeof FETCH_USERS; payload: IUser[] }
  | { type: typeof ADD_USER; payload: IUser }
  | { type: typeof CLEAN_USERS; payload?: undefined }
  | { type: typeof SORT_USER_BY_EMAIL; payload?: undefined }
  | { type: typeof SORT_USER_BY_NAME; payload?: undefined }
  | { type: typeof SORT_USER_BY_CITY; payload?: undefined }
  | { type: typeof SORT_USER_BY_AGE; payload?: undefined };

export const usersReducer = (state = initialState, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USERS:
      return { ...state, people: payload };
    case ADD_USER:
      return { ...state, people: [...state.people, payload] };
    case CLEAN_USERS:
      return {
        ...state,
        people: [],
      };
    case SORT_USER_BY_NAME:
      return {
        ...state,
        people: [...state.people].sort((u1: IUser, u2: IUser) => {
          return u1.name.first.localeCompare(u2.name.first);
        }),
      };
    case SORT_USER_BY_CITY:
      return {
        ...state,
        people: [...state.people].sort((u1: IUser, u2: IUser) => {
          return u1.location.city.localeCompare(u2.location.city);
          // u1[`${}`]
        }),
      };
    case SORT_USER_BY_EMAIL:
      return {
        ...state,
        people: [...state.people].sort((u1: IUser, u2: IUser) => {
          return u1.email.localeCompare(u2.email);
        }),
      };

    case SORT_USER_BY_AGE:
      return {
        ...state,
        people: [...state.people].sort((u1, u2) => {
          return u1.dob.age - u2.dob.age;
        }),
      };

    default:
      return state;
  }
};
