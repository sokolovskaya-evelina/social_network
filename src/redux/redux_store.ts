import {createStore, combineReducers, applyMiddleware} from "redux"
import ProfileReducer from "./profile_reducer";
import DialogsReducer from "./dialogs_reducer";
import UsersReducer from "./users_reducer";
import AuthReducer from "./auth_reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from "redux-form";
import appReducer from "./app_reducer";

export type reduxStoreType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    app: appReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store;
export default store
