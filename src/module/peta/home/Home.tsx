import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useRecoilValue} from 'recoil';
import {Header} from '../../../components';
import MapSearch from './home.fragments/MapSearch';
import ModalPoskoList from './home.fragments/ModalPoskoList';
import PetaFilter from './home.fragments/PetaFilter';
import {getSearchLocation, sGetAllPos} from './home.model';

const Home = () => {
  const [visible, setVisible] = React.useState(false);
  const [region, setRegion] = React.useState({
    latitude: -7.7800608124304365,
    longitude: 110.36684944676279,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const allPos = useRecoilValue(sGetAllPos);

  const onSearch = (text: string) => {
    getSearchLocation(text).then(res => {
      if (res) {
        const {location} = res[0].geometry;
        setRegion({
          ...region,
          latitude: location.lat,
          longitude: location.lng,
        });
      }
    });
  };

  const toggleModalView = () => {
    setVisible(!visible);
  };

  return (
    <>
      <View style={styles.container}>
        <Header
          title="Posko"
          isHome
          onClickIconLeft={() => {}}
          onClickIconRight={() => {}}
        />
        <MapSearch onSearch={onSearch} />
        <PetaFilter onPressFilter={toggleModalView} />
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={region}
          showsUserLocation>
          {allPos.map(item => {
            return (
              <Marker
                key={item.id}
                coordinate={item.location}
                title={item.name}
              />
            );
          })}
        </MapView>
      </View>
      <ModalPoskoList visible={visible} onRequestClose={toggleModalView} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
