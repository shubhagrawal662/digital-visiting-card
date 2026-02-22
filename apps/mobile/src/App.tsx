import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';

const palette = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, primary: '#2E7D32', background: '#F7FAF7' }
};

export default function App() {
  const isDark = false;
  return (
    <NavigationContainer theme={isDark ? DarkTheme : palette}>
      <RootNavigator />
    </NavigationContainer>
  );
}
