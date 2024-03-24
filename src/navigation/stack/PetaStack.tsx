import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {PetaStackParams} from '../navigation.interface';
import Home from '../../module/peta/home/Home';
import PoskoDetail from '../../module/peta/poskoDetail/PoskoDetail';

const PetaStack = createNativeStackNavigator<PetaStackParams>();

export const PetaNavigator = () => {
  return (
    <PetaStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <PetaStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <PetaStack.Screen
        name="PoskoDetail"
        component={PoskoDetail}
        options={{headerShown: false}}
      />
    </PetaStack.Navigator>
  );
};
