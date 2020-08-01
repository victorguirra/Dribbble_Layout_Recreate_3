import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/Routes/stackNavigation'

export default function App() {
  return (
      <>
        <Routes />
        <StatusBar style="auto" />
      </>
  );
}


