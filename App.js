import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth.context';
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
        <FlashMessage position="top" duration={3000}/>
      </AuthProvider>
    </NavigationContainer>
  )
}