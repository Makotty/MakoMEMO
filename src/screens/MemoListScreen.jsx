import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import MemoListItem from '../componets/MemoListItem';
import CircleButton from '../componets/CircleButton';
import LogOutButton from '../componets/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
    useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`);
      unsubscribe = ref.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
        });
      });
    }
    return unsubscribe;
  }, []);

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
