import { registerRootComponent } from 'expo';
import React from 'react';
import configureStore from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './src/App';
import { Provider } from 'react-redux';

const { store, persistor } = configureStore;

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

registerRootComponent(Root);
