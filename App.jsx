import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppBar from './src/componets/AppBar';
import MemoListItem from './src/componets/MemoListItem';

export default function App() {
  return (
    <View style={styles.container}>

      <AppBar />

      <MemoListItem />

      <View style={styles.newMemoButton}>
        <Text style={styles.newMemoPlus}>+</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
  },
  newMemoButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lime',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 50,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  newMemoPlus: {
    color: 'lime',
    fontSize: 40,
    lineHeight: 40,
  },
});
