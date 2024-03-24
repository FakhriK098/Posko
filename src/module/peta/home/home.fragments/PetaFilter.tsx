import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, images} from '../../../../themes';
import {PetaFilterProps} from '../home.interface';

const PetaFilter = ({onPressFilter}: PetaFilterProps) => {
  return (
    <Pressable style={styles.containter} onPress={onPressFilter}>
      <View style={styles.content}>
        <Image source={images.iconFilter} style={styles.icon} />
        <Text style={{color: colors.black}}>Filter Peta</Text>
      </View>
    </Pressable>
  );
};

export default PetaFilter;

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
    marginEnd: 8,
  },
  containter: {
    position: 'absolute',
    zIndex: 99,
    bottom: '3%',
    left: '37%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    backgroundColor: colors.white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.blue,
  },
});
