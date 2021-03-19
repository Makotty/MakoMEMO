import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import CircleButton from '../componets/CircleButton';

export default function MemoDetailScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>

      <View style={styles.memoTitleHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2020/03/05 05:25</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト
          あああああああああああああああああああああああああああああああああああああああああああああああああ
          これはテストです。
        </Text>
      </ScrollView>

      <CircleButton
        style={styles.memoEditButton}
        name="edit"
        onPress={() => { navigation.navigate('MemoEdit'); }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  memoTitleHeader: {
    backgroundColor: 'white',
    borderBottomWidth: 3,
    borderColor: 'lime',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: 'lime',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: 'gray',
    fontSize: 13,
    lineHeight: 18,
  },
  memoBody: {
    paddingVertical: 46,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
  memoEditButton: {
    top: 58.5,
    bottom: 'auto',
  },
});
