import React from 'react';
import AppNavigator from './app/AppNavigator';
import { NativeScreenContainer } from 'react-native-screens';
import {enableScreens} from 'react-native-screens';
import { Provider } from 'react-redux';
import {store} from './app/redux/store';
enableScreens(false);

const App = () => {
  return (
    <Provider>
      <NativeScreenContainer>
          <AppNavigator />
      </NativeScreenContainer>
    </Provider>
    
    
  );
};

export default App;