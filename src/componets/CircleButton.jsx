/* eslint-disable linebreak-style */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { string, shape } from 'prop-types';

import { Feather } from '@expo/vector-icons';

export default function CircleButton(props) {
  const { style, name } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Feather name={name} size={32} color="white" />
    </View>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: 'lime',
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
    color: 'white',
    fontSize: 40,
    lineHeight: 40,
  },
});
