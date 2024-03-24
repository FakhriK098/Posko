import React from 'react';
import {FlatList, Modal, Pressable, StyleSheet, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {colors} from '../../../../themes';
import {styles} from '../../home/home.fragments/ModalPoskoList';
import {ModalViewProps, Pos} from '../../home/home.interface';
import {sGetPosList} from '../../home/home.model';
import Filter from './Filter';
import ItemPos from './ItemPos';

const ModalPosList = ({visible, onRequestClose}: ModalViewProps) => {
  const posList = useRecoilValue(sGetPosList);

  const renderItem = ({item, index}: {item: Pos; index: number}) => {
    return <ItemPos key={`${item.id}-${index}`} item={item} />;
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
      hardwareAccelerated
      animationType="fade">
      <Pressable
        onPress={onRequestClose}
        style={[styles.containerModal, styles.containerModalBackDrop]}
      />
      <View style={styles.containerModalBackDrop}>
        <View style={styles.modalContainer}>
          <View style={style.containerLine}>
            <View style={style.line} />
          </View>
          <Filter />
          <FlatList data={posList} renderItem={renderItem} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalPosList;

const style = StyleSheet.create({
  line: {
    height: 5,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.grey,
    marginTop: 5,
  },
  containerLine: {
    alignItems: 'center',
  },
});
