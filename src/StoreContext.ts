import React, {createContext} from "react";
import {createStore} from "redux";
import store from "./redux/redux_store";

export type StoreContextType = any


const StoreContext:StoreContextType = React.createContext(null)


//TODO сделать Provider

/*export const Provider=(props: any)=>{
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}*/

export default StoreContext