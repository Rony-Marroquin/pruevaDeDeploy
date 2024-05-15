
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../Screens/screen1';
import Screen2 from '../Screens/screen2';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}

export default MyStack;
