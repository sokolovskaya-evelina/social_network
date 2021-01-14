import React from 'react';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux_store";
import '@fortawesome/fontawesome-free/css/all.min.css'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}
                     dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


store.subscribe(() => {
    rerenderEntireTree()
})
rerenderEntireTree()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
