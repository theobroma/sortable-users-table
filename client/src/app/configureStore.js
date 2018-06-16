import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

const logger = createLogger({
  collapsed: true
});

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
export default store;
