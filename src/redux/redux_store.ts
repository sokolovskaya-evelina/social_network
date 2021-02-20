import {createStore, combineReducers, applyMiddleware} from "redux"
import ProfileReducer from "./profile_reducer";
import DialogsReducer from "./dialogs_reducer";
import UsersReducer from "./users_reducer";
import AuthReducer from "./auth_reducer";
import thunkMiddleware from 'redux-thunk'

//TODO спросить про типизацию!!!

export type reduxStoreType = ReturnType<typeof createStore>

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
})

let store: reduxStoreType = createStore(reducers, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store;
export default store