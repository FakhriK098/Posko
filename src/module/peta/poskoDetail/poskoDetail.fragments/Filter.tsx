import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {useRecoilState} from 'recoil';
import {colors, images} from '../../../../themes';
import {aPosSearchQuery, aPosSort} from '../../home/home.model';

const {width} = Dimensions.get('window');

const Filter = () => {
  const [iconSort, setIconSort] = React.useState(images.iconArrowUp);
  const [query, setQuery] = useRecoilState(aPosSearchQuery);
  const [sort, setSort] = useRecoilState(aPosSort);

  const onPressSort = () => {
    setIconSort(sort === 'ASC' ? images.iconArrowDown : images.iconArrowUp);
    setSort(sort === 'ASC' ? 'DESC' : 'ASC');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={query}
        onChangeText={setQuery}
        placeholder="Search for pos"
        placeholderTextColor={colors.grey}
      />
      <Pressable
        style={({pressed}) => (pressed ? {opacity: 0.5} : {})}
        onPress={onPressSort}>
        <View style={styles.containerFilter}>
          <Image key={iconSort} source={iconSort} style={styles.icon} />
        </View>
      </Pressable>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: 2,
  },
  searchInput: {
    color: colors.black,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 4,
    width: '80%',
  },
  filter: {
    width: width / 3,
    height: 30,
  },
  containerFilter: {
    borderWidth: 1,
    borderColor: colors.grey,
    marginStart: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
