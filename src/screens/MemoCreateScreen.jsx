/* eslint-disable linebreak-style */

import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import AppBar from '../componets/AppBar';
import CircleButton from '../componets/CircleButton';

export default function MemoCreateScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AppBar />

      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
