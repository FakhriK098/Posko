import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {Pos} from '../../home/home.interface';
import {sGetPosList} from '../../home/home.model';
import ItemPos from './ItemPos';

const PosList = ({visible}: {visible: boolean}) => {
  const posList = useRecoilValue(sGetPosList);

  const renderItem = ({item, index}: {item: Pos; index: number}) => {
    return <ItemPos key={`${item.id}-${index}`} item={item} isHorizontal />;
  };

  if (visible) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posList}
        renderItem={renderItem}
        horizontal
        style={styles.list}
      />
    </View>
  );
};

export default PosList;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '10%',
  },
  list: {
    paddingStart: 12,
  },
});
