import React from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {atom, useSetRecoilState} from 'recoil';

export const aPermissionLocation = atom<boolean>({
  key: 'aPermissionLocation',
  default: false,
});

export const usePermission = () => {
  const setPermissionLocation = useSetRecoilState(aPermissionLocation);
  React.useEffect(() => {
    const requestLocation = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
          setPermissionLocation(granted === PermissionsAndroid.RESULTS.GRANTED);
        } catch (e: any) {
          console.log(e);
        }
      }
    };

    requestLocation();
  });
};
