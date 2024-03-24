import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../themes';

const Beranda = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.black}}>Comming soon..</Text>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
