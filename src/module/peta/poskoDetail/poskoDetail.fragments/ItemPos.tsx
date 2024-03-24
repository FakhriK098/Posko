import React from 'react';
import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, images} from '../../../../themes';
import {ItemPosProps} from '../poskoDetail.interface';

const ItemPos = ({item, isHorizontal}: ItemPosProps) => {
  const onMakeCall = () => {
    Linking.canOpenURL(`tel:${item.phoneNumber}`).then(supported => {
      if (supported) {
        Linking.openURL(`tel:${item.phoneNumber}`);
      }
    });
  };

  return (
    <View
      style={[
        styles.container,
        isHorizontal ? styles.containerHorizontal : {},
      ]}>
      <Image source={{uri: item.icon}} style={styles.icon} />
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text
          style={
            styles.officer
          }>{`${item.officerName} - ${item.officerRank}`}</Text>
        <View style={styles.containerCall}>
          <Image source={images.iconCall} style={styles.iconCall} />
          <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
        </View>
        <Pressable
          style={({pressed}) => (pressed ? {opacity: 0.5} : {})}
          onPress={onMakeCall}>
          <View style={styles.containerCalling}>
            <Image source={images.iconCall} style={styles.iconCalling} />
            <Text style={styles.calling}>Hubungi</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default ItemPos;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  icon: {
    width: 42,
    height: 42,
    marginEnd: 14,
  },
  title: {
    color: colors.black,
    fontSize: 24,
  },
  officer: {
    color: colors.black,
    fontSize: 12,
    marginTop: 5,
  },
  iconCall: {
    tintColor: colors.black,
    width: 12,
    height: 12,
    marginEnd: 6,
  },
  containerCall: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  phoneNumber: {
    fontSize: 12,
    color: colors.black,
  },
  iconCalling: {
    tintColor: colors.blue,
    width: 18,
    height: 18,
    marginEnd: 6,
  },
  containerCalling: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    maxWidth: 100,
    marginTop: 10,
  },
  calling: {
    color: colors.blue,
    fontSize: 18,
  },
  containerHorizontal: {
    marginEnd: 12,
    borderRadius: 10,
  },
});
