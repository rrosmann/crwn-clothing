import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root.reducer';
import rootSaga from './root.saga';

let sagaMiddleware = null;

const middlewares = generateMiddlewaresArray(process.env.NODE_ENV);
function generateMiddlewaresArray(environmentVariable) {
  const middlewaresArray = [];
  if (environmentVariable === 'development') {
    middlewaresArray.push(logger);
  }

  // middlewaresArray.push(thunk);
  sagaMiddleware = createSagaMiddleware();
  middlewaresArray.push(sagaMiddleware);
  return middlewaresArray;
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
