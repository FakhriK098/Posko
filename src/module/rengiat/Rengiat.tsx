import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../themes';

const Rengiat = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.black}}>Comming soon..</Text>
    </View>
  );
};

export default Rengiat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
