/**
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function BrewHistoryScreen() {

  const getBrewHistory = async () => {
    const brewHistoryCount = await AsyncStorage.getItem('brewHistoryCount');
    return brewHistoryCount;
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>BrewHistoryScreen!</Text>
    </View>
  );
}
