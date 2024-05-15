// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigator/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
