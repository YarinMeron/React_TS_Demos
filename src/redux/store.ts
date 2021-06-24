import {combineReducers, createStore, Reducer} from "redux";
import {ActionType, IUsersState, usersReducer} from "./reducers/UsersReducer";

export interface IUser {
    gender: string,
    name: { title: string, first: string, last: string }
    location: { street: { number: number, name: string } ,city: string,
        state: string,
        contry: string,
        postcode: number,
        coordinates: { latitude: string, longitude: string }
        timezone: { offset: string, description: string }}
    email: string,
    login: { uuid: string, username: string, password: string, salt: string, md5: string, sha1: string, sha256: string }
    dob: { date: string, age: number }
    registered: { date: string, age: number }
    phone: string,
    cell: string,
    id: { name: string, value: string }
    picture: { large: string, medium: string, thumbnail: string }
    nat: string,
}



const reducers = combineReducers({
    users: usersReducer,
})

export type RootStore = {users: IUsersState}


export const store = createStore(
    reducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()

)