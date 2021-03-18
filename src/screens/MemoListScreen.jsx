/* eslint-disable linebreak-style */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from '../componets/AppBar';
import MemoListItem from '../componets/MemoListItem';
import NewMemoButton from '../componets/NewMemoButton';

export default function MemoListScreen() {
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
