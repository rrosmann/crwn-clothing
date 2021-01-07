import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root.reducer';

const middlewares = generateMiddlewaresArray(process.env.NODE_ENV);
function generateMiddlewaresArray(environmentVariable) {
  if (environmentVariable === 'development') {
    return [logger];
  }

  return [];
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
