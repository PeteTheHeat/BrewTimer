/**
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import Counter from 'react-native-counters';

export default function StartBrewScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.rowStyle}>
          <Text>Bean</Text>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              {label: 'Philz Decaf', value: 'philz'},
              {label: 'Peets', value: 'peets'},
            ]}
            placeholder={{}}
          />
        </View>
        <View style={styles.rowStyle}>
          <Text>Dosage</Text>
          <Counter
            start={8}
            max={40}
            onChange={(number, type) => {
              console.log(number, type);
            }}
          />
        </View>
        <View style={styles.rowStyle}>
          <Text>Grind</Text>
          <Counter
            start={6}
            max={100}
            onChange={(number, type) => {
              console.log(number, type);
            }}
          />
        </View>
        <Button
          onPress={() => {
            console.log('lol');
          }}
          title={'Start Brew'}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
});
