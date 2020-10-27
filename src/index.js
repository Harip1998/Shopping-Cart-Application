import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './store/reducers/mainReducer'
 
const store = createStore(mainReducer);
 
ReactDOM.render(
     <Provider 
       store={store}>
       <App /></Provider>,
    document.getElementById('root'));
 
serviceWorker.unregister();