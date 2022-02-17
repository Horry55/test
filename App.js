import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator"
import BottomTabNavigator from "./navigation/TabNavigator"

export default function App() {
  return (
    <NavigationContainer>
    <DrawerNavigator/>
    </NavigationContainer>
  );
}