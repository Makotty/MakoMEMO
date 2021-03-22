/* eslint-disable linebreak-style */

import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { shape, string, instanceOf, arrayOf } from 'prop-types';

export default function MemoListItem(props) {
  const { memos } = props;
  const navigation = useNavigation();
  return (
    <View>

      {memos.map((memo) => (
        <TouchableOpacity
          key={memo.id}
          style={styles.memoListItem}
          onPress={() => { navigation.navigate('MemoDetail') }}
        >
          <View>
            <Text style={styles.memoListItemTitle}>{memo.bodyText}</Text>
            <Text style={styles.memoListItemDate}>{String(memo.updatedAt)}</Text>
          </View>
          <TouchableOpacity
            style={styles.memoDelete}
            onPress={() =>{ Alert.alert('Are you Sure?') }}
          >
            <Feather name="x" size={16} color="#B0B0B0" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}

    </View>
  );
}

MemoListItem.propTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderColor: 'rgba(0,255,0,0.7)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: 'gray',
  },
  memoDelete: {
    padding: 8,
  },
});
