import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoListItem from '../componets/MemoListItem';
import CircleButton from '../componets/CircleButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>

      <MemoListItem />

      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ffe6',
  },
});
