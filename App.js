import React from 'react';
import AppNavigator from './app/AppNavigator';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {store} from './app/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <AppNavigator />
      </NavigationContainer>
    </Provider>
    
    
  );
};

export default App;