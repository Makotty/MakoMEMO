import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './src/componets/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Hello bang>World</Hello>
      <Hello style={{ fontSize: 16 }}>Small World</Hello>
      <Text>Welcome! MakoApp!</Text>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
