import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth.context';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}