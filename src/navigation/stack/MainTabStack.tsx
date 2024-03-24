/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// @ts-nocheck
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {MainTabStackParams} from '../navigation.interface';
import Beranda from '../../module/beranda/Beranda';
import {PetaNavigator} from './PetaStack';
import Rengiat from '../../module/rengiat/Rengiat';
import {Image, StyleSheet, Text} from 'react-native';
import {colors, images} from '../../themes';
import {usePermission} from '../../hook/usePermission/usePermission';

const MainTabStack = createBottomTabNavigator<MainTabStackParams>();

const shownRoutes = ['BerandaStack', 'PetaStack', 'RengiatStack'];

const routes = {
  BerandaStack: {
    component: Beranda,
    icon: images.iconBeranda,
    initialParams: null,
    name: 'Beranda',
  },
  PetaStack: {
    component: PetaNavigator,
    icon: images.iconPeta,
    initialParams: null,
    name: 'Peta',
  },
  RengiatStack: {
    component: Rengiat,
    icon: images.iconPaper,
    initialParams: null,
    name: 'Rengiat',
  },
};

export const MainTabNavigator = () => {
  usePermission();

  return (
    <MainTabStack.Navigator
      initialRouteName="PetaStack"
      screenOptions={{headerShown: false}}>
      {shownRoutes.map((routeKey, index) => {
        return (
          <MainTabStack.Screen
            key={`${routeKey}-${index}`}
            name={routeKey as keyof MainTabStackParams}
            component={routes[routeKey].component}
            options={_ => {
              return {
                headerShown: false,
                tabBarLabel: ({focused}) => {
                  return (
                    <Text
                      style={[
                        {color: focused ? colors.blue : colors.grey},
                        styles.title,
                      ]}>
                      {routes[routeKey].name}
                    </Text>
                  );
                },
                tabBarIcon: ({focused}) => {
                  return (
                    <Image
                      source={routes[routeKey].icon}
                      tintColor={focused ? colors.blue : colors.grey}
                      style={styles.icon}
                    />
                  );
                },
                tabBarStyle: styles.tabBar,
              };
            }}
          />
        );
      })}
    </MainTabStack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    marginBottom: 10,
  },
  tabBar: {
    height: 70,
    justifyContent: 'center',
  },
  title: {
    marginBottom: 10,
  },
});
