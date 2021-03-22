import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInnner}>
        <Text style={styles.appbarTitle}>Mako MEMO APP</Text>
        <Text style={styles.appbarLogout}>LogOut</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: 'white',
    borderBottomWidth: 5,
    borderColor: 'lime',
    justifyContent: 'flex-end',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: 'lime',
    fontWeight: 'bold',
  },
  appbarInnner: {
    alignItems: 'center',
  },
  appbarLogout: {
    position: 'absolute',
    right: 19,
    bottom: 14,
    color: 'rgba(0,255,0,0.7)',
  },
});
