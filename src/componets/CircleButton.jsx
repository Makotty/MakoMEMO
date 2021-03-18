/* eslint-disable linebreak-style */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string } from 'prop-types';

export default function NewMemoButton(props) {
  const { children } = props;
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{ children }</Text>
    </View>
  );
}

NewMemoButton.propTypes = {
  children: string.isRequired,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lime',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 50,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  circleButtonLabel: {
    color: 'lime',
    fontSize: 40,
    lineHeight: 40,
  },
});
