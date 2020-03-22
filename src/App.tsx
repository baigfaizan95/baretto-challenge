import React, { Fragment, useLayoutEffect } from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import AppNavigator from './navigator';
import { MaterialIconsPack } from './assets/material-icons-pack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <Fragment>
      <IconRegistry icons={MaterialIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </ApplicationProvider>
    </Fragment>
  );
};

export default App;
