import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {HeaderProps} from './header.interface';
import {colors, images} from '../../themes';

const Header = ({
  id,
  title,
  isHome,
  onClickIconLeft,
  onClickIconRight,
}: HeaderProps) => {
  if (isHome) {
    return (
      <View style={styles.containerHome}>
        <Pressable onPress={onClickIconLeft}>
          <Image source={images.iconMenu} style={styles.iconLeft} />
        </Pressable>
        <View>
          <Text style={styles.titleHome}>{title}</Text>
        </View>
        <Pressable onPress={onClickIconRight}>
          <Image source={images.iconNotification} style={styles.iconLeft} />
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={onClickIconLeft}>
        <Image source={images.iconBack} style={styles.iconBack} />
      </Pressable>
      <Text style={styles.textId}>{id}</Text>
      <Text style={styles.textTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  iconLeft: {
    width: 26,
    height: 26,
  },
  containerHome: {
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.blue,
  },
  titleHome: {
    fontSize: 24,
    color: colors.white,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 18,
    backgroundColor: colors.white,
  },
  iconBack: {
    width: 18,
    height: 18,
    marginEnd: 12,
  },
  textId: {
    fontFamily: 'bold',
    fontSize: 18,
    color: colors.black,
    marginEnd: 8,
  },
  textTitle: {
    fontSize: 18,
    color: colors.black,
  },
});
