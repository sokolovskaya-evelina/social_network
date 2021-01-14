import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom"
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {AllActionsTypes,} from './redux/state';
import '@fortawesome/fontawesome-free/css/all.min.css'
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {reduxStoreType} from "./redux/redux_store";

export type AppType = {
    store: reduxStoreType
    dispatch: (action: AllActionsTypes) => void
}

const App: React.FC<AppType> = (props) => {
    const state = props.store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}


export default App;