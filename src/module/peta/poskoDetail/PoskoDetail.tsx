import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {Header} from '../../../components';
import {PetaStackParams} from '../../../navigation/navigation.interface';
import {aPoskoIdSelected, sGetPosList} from '../home/home.model';
import ModalPosList from './poskoDetail.fragments/ModalPosList';
import PosList from './poskoDetail.fragments/PosList';

const PoskoDetail = () => {
  const {params} = useRoute<RouteProp<PetaStackParams, 'PoskoDetail'>>();
  const {goBack} = useNavigation<NativeStackNavigationProp<PetaStackParams>>();
  const [visible, setVisible] = React.useState(false);
  const posList = useRecoilValue(sGetPosList);
  const setPoskoIdSelected = useSetRecoilState(aPoskoIdSelected);

  React.useEffect(() => {
    if (params) {
      setPoskoIdSelected(params.id);
      setVisible(true);
    }
  }, [params, setPoskoIdSelected]);

  const toggleModalView = () => {
    setVisible(!visible);
  };

  const onClickIconLeft = () => {
    goBack();
  };

  if (!posList) {
    return <></>;
  }

  return (
    <>
      <View style={styles.container}>
        <Header
          title={params.name}
          id={params.id}
          onClickIconLeft={onClickIconLeft}
        />
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -7.7800608124304365,
            longitude: 110.36684944676279,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation>
          {posList.map(item => {
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
      <PosList visible={visible} />
      <ModalPosList visible={visible} onRequestClose={toggleModalView} />
    </>
  );
};

export default PoskoDetail;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
