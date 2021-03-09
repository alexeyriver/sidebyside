import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const preloadedState = window.localStorage.getItem('state') || '{}'
const store = createStore(rootReducer,JSON.parse(preloadedState), composeWithDevTools(applyMiddleware(ReduxThunk)));

store.subscribe(() => {
  console.log('change');
  const state = store.getState();
  window.localStorage.setItem('state', JSON.stringify(state));
});
export default store;
