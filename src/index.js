import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import questionReducer from './reducers/questionReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from 'history'

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(questionReducer, composeEnhancers(applyMiddleware(thunk)))

export const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
