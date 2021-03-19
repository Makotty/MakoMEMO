/* eslint-disable linebreak-style */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import AppBar from '../componets/AppBar';
import Button from '../componets/Button';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />

        <Button label="SIGN UP" />

        <View style={styles.footer}>
          <Text style={styles.footerText}>アカウントをお持ちですか？</Text>
          <Text style={styles.footerLink}>Log In</Text>
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
    color: 'rgba(0,0,0,0.3)',
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
