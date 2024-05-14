import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Meditate from '../screens/Meditate';
import Home from '../screens/Home';
import Meals from '../screens/Meals;'
i

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Meditate" component={Meditate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}