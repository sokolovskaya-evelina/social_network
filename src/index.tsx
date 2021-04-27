import React from 'react';
import './index.css';
import store from "./redux/redux_store";
import '@fortawesome/fontawesome-free/css/all.min.css'
import ReactDOM from 'react-dom';
import SocialNetworkApp from './App';
import reportWebVitals from './reportWebVitals';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <SocialNetworkApp/>,
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
reportWebVitals()


