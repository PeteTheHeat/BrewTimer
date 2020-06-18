/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import Counter from 'react-native-counters';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.rowStyle}>
          <Text>Bean:</Text>
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
          <Text>Dosage:</Text>
          <Counter
            start={8}
            max={40}
            onChange={(number, type) => {
              console.log(number, type);
            }}
          />
        </View>
        <View style={styles.rowStyle}>
          <Text>Grind:</Text>
          <Counter
            start={6}
            max={100}
            onChange={(number, type) => {
              console.log(number, type);
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
  },
});

export default App;
