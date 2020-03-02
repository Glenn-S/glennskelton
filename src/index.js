import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import reducers from './reducers';

// use redux-dev-tools for testing
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // for redux dev tools
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware())
); // setup redux store
//const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);