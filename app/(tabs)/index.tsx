import { Image, StyleSheet, Platform } from 'react-native';
import {Linking} from 'react-native'
import React from 'react';
import { SafeAreaView, StatusBar, View, Text, TouchableOpacity } from 'react-native';

const EmergencyContacts = () => {
  const makeCall = (number: string) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.statusBar}>
        <Text style={styles.dateText}>TER 25 JUNHO 2024</Text>
        <Text style={styles.timeText}>20:30</Text>
      </View>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.button} onPress={() => makeCall('+55(47)997541960')}>
          <Image source={require('@/assets/images/police.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => makeCall('192')}>
          <Image source={require('@/assets/images/ambulance.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => makeCall('193')}>
          <Image source={require('@/assets/images/firefighter.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ccc',
  },
  dateText: {
    fontSize: 18,
  },
  timeText: {
    fontSize: 18,
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: '40%',
    height: '30%',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  sosText: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default EmergencyContacts;