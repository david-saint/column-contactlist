import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import {theme} from './theme';
import Navigator from './navigator';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  );
};

export default App;
