import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CourseScreen from "../screens/CourseScreen";
import TabScreen from "../screens/TabScreen";
import TestScreen from "../screens/TestScreen";
import PlayerScreen from '../screens/PlayerScreen';
import ProfileScreen from "../screens/ProfileScreen";
import SettingScreen from "../screens/SettingScreen";

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen  name="CourseScreen" component={CourseScreen} />
        <Stack.Screen  name="TabScreen" component={TabScreen} />
        <Stack.Screen  name="TestScreen" component={TestScreen} />
        <Stack.Screen  name="PlayerScreen" component={PlayerScreen} />
        <Stack.Screen  name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen  name="SettingScreen" component={SettingScreen} />
        {/* Las pantallas a las que el usuario pueda entrar */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
