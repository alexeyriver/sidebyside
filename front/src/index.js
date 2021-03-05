import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer.js'
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';


const preloadedState = window.localStorage.getItem('state') || '{}'
const store = createStore(rootReducer, JSON.parse(preloadedState), composeWithDevTools(applyMiddleware(thunk)))
store.subscribe(() => {
  const state = store.getState()
  window.localStorage.setItem('state', JSON.stringify(state))
})


ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);

