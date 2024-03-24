import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {colors, images} from '../../../../themes';
import {CurrentLocationProps} from '../home.interface';

const CurrentLocation = ({onGetCurrentLocation}: CurrentLocationProps) => {
  return (
    <Pressable style={styles.containter} onPress={onGetCurrentLocation}>
      <View>
        <Image source={images.iconCurrentLocation} style={styles.icon} />
      </View>
    </Pressable>
  );
};

export default CurrentLocation;

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
  },
  containter: {
    position: 'absolute',
    padding: 7,
    zIndex: 99,
    backgroundColor: colors.white,
    borderRadius: 10,
    top: '20%',
    right: '3%',
  },
});
