import {createStore, combineReducers} from "redux"
import ProfileReducer, {addPostActionCreator} from "./profile_reducer";
import DialogsReducer from "./dialogs_reducer";

export type reduxStoreType =ReturnType<typeof createStore>

let reducers = combineReducers({
 profilePage: ProfileReducer,
 dialogsPage: DialogsReducer
})
 let store: reduxStoreType = createStore(reducers)

export default store