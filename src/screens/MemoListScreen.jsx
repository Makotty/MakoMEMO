import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import firebase from 'firebase';

import MemoListItem from '../componets/MemoListItem';
import CircleButton from '../componets/CircleButton';
import LogOutButton from '../componets/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
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
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt,
          });
        });
        setMemos(userMemos);
      }, (error) => {
        console.log(error);
        Alert.alert('データの読み込みに失敗しました');
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
