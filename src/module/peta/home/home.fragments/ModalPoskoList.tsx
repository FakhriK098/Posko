import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {GetPosko, ModalViewProps} from '../home.interface';
import {colors, images} from '../../../../themes';
import {useRecoilValue} from 'recoil';
import {sGetPosko} from '../home.model';
import ItemPosko from './ItemPosko';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PetaStackParams} from '../../../../navigation/navigation.interface';

const {height} = Dimensions.get('window');

const ModalPoskoList = ({visible, onRequestClose}: ModalViewProps) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<PetaStackParams>>();
  const posko = useRecoilValue(sGetPosko);

  const onPress = (id: string, name: string) => {
    onRequestClose();
    navigate('PoskoDetail', {id: id, name: name});
  };

  const renderItem = ({item, index}: {item: GetPosko; index: number}) => {
    return (
      <ItemPosko key={`${item.id}-${index}`} item={item} onPress={onPress} />
    );
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
          <View style={styles.containerHeader}>
            <Text style={styles.title}>Pilih Filter</Text>
            <Pressable onPress={onRequestClose}>
              <View>
                <Image source={images.iconClose} style={styles.iconClose} />
              </View>
            </Pressable>
          </View>
          <FlatList data={posko} renderItem={renderItem} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalPoskoList;

export const styles = StyleSheet.create({
  containerModalBackDrop: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  containerModal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: colors.white,
    maxHeight: height * 0.9,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },
  iconClose: {
    width: 18,
    height: 18,
  },
  title: {
    color: colors.black,
    fontSize: 18,
  },
});
