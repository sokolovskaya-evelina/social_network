import {createStore, combineReducers} from "redux"
import ProfileReducer from "./profile_reducer";
import DialogsReducer from "./dialogs_reducer";
import UsersReducer from "./users_reducer";

//TODO спросить про типизацию!!!

export type reduxStoreType = ReturnType<typeof createStore>

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer
})

let store: reduxStoreType = createStore(reducers)

export default store