/* eslint-disable linebreak-style */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from '../componets/AppBar';
import MemoListItem from '../componets/MemoListItem';
import CircleButton from '../componets/CircleButton';

export default function MemoListScreen() {
  return (
    <View style={styles.container}>

      <AppBar />

      <MemoListItem />

      <CircleButton name="plus" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ffe6',
  },
});
