import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';

import Home from './screens/Home';

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <Home />
  </ApplicationProvider>
);

export default App;
