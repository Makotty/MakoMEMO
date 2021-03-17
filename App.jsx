import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from './src/componets/AppBar';
import MemoListItem from './src/componets/MemoListItem';
import NewMemoButton from './src/componets/NewMemoButton';

export default function App() {
  return (
    <View style={styles.container}>

      <AppBar />

      <MemoListItem />

      <NewMemoButton>+</NewMemoButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
  },
});
