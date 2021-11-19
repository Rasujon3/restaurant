import React from 'react';
import AppNavigator from './app/AppNavigator';
import { NativeScreenContainer } from 'react-native-screens';

const App = () => {
  return (
    <NativeScreenContainer>
        <AppNavigator />
    </NativeScreenContainer>
    
  );
};

export default App;