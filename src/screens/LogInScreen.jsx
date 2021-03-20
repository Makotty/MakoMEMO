import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../componets/Button';

export default function LogInScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      }
    });
    return unsubscribe;
  }, []);

  function hanldlePress() {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      console.log(user.uid);
      navigation.reset({
        index: 0,
        routes: [{ name: 'MemoList' }],
      });
    })
    .catch((error) => {
      Alert.alert(error.code);
    });
  }

  return (
    <View style={styles.container}>

      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />


        <Button
          label="LOG IN"
          onPress={hanldlePress}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>アカウントをお持ちではありませんか？</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'SignUp' }],
              });
            }}
          >
            <Text style={styles.footerLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ffe6',
  },
  inner: {
    paddingVertical: 27,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 15,
    height: 48,
    borderColor: 'lime',
    borderWidth: 0.25,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    marginBottom: 25,
    borderRadius: 24,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 15,
  },
  footerLink: {
    fontSize: 18,
    lineHeight: 24,
    color: 'lime',
  },
});
