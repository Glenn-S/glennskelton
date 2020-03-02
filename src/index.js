import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { saveToLocalStorage, loadFromLocalStorage } from './config/store';

import App from './components/App';
import reducers from './reducers';

// use redux-dev-tools for testing
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // for redux dev tools
const store = createStore(
  reducers,
  //loadFromLocalStorage(), // will overwrite the reducers if the key exists
  composeEnhancers(applyMiddleware())
); // setup redux store

//store.subscribe(() => saveToLocalStorage(store.getState())); // persist state for application

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);