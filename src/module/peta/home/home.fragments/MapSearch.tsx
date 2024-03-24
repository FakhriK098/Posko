import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {MapSearchProps} from '../home.interface';
import {colors} from '../../../../themes';

const MapSearch = ({onSearch}: MapSearchProps) => {
  const [query, setQuery] = React.useState('');

  const handleSearch = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        value={query}
        onChangeText={handleSearch}
        placeholder="Search for places"
        placeholderTextColor={colors.grey}
      />
    </View>
  );
};

export default MapSearch;

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    margin: 10,
    zIndex: 99,
    backgroundColor: colors.white,
    width: '80%',
    borderRadius: 8,
    top: '7%',
  },
  searchInput: {
    color: colors.black,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
});
