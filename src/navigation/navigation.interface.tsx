import {NavigatorScreenParams} from '@react-navigation/native';

export type PetaStackParams = {
  Home: undefined;
  PoskoDetail: {
    id: string;
    name: string;
  };
};

export type MainTabStackParams = {
  BerandaStack: undefined;
  PetaStack: NavigatorScreenParams<PetaStackParams>;
  RengiatStack: undefined;
};
