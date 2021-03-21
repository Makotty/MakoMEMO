import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import firebase from 'firebase';

import CircleButton from '../componets/CircleButton';
import KeyboadSafeView from '../componets/KeyboadSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;

  function handlePress() {
    const db = firebase.firestore();
    const ref = db.collection('memos');
    ref.add({
      bodyText:'Hello',
    })
      .then((docRef) => {
        console.log('Created!', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('Error!', error);
      });
  }

  return (
    <KeyboadSafeView style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={handlePress}
      />
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
