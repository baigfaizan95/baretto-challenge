import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from '../reducers';
import PromiseMiddleware from 'redux-promise-middleware';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(PromiseMiddleware, Thunk);

export default () => {
  let store = createStore(persistedReducer, middleware);
  let persistor = persistStore(store);
  return { store, persistor };
};
