import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {RecoilRoot} from 'recoil';
import {MainTabNavigator} from './navigation/stack/MainTabStack';

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
