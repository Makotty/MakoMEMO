import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import CircleButton from '../componets/CircleButton';
import KeyboadSafeView from '../componets/KeyboadSafeView';

export default function MemoEditScreen() {
  return (
    <KeyboadSafeView style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboadSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 27,
    paddingHorizontal: 32,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
