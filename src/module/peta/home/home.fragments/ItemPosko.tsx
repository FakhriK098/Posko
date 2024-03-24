import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../../themes';
import {ItemPoskoProps} from '../home.interface';

const ItemPosko = ({item, onPress}: ItemPoskoProps) => {
  return (
    <Pressable
      style={({pressed}) => (pressed ? {opacity: 0.5} : {})}
      onPress={() => onPress(item.id, item.name)}>
      <View key={item.id} style={styles.container}>
        <Image source={{uri: item.icon}} style={styles.icon} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

export default ItemPosko;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderColor: colors.grey,
  },
  name: {
    color: colors.black,
    fontSize: 18,
  },
  icon: {
    width: 42,
    height: 42,
    marginEnd: 18,
  },
});
