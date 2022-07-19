import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

const homeScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.fixedRatio} />
      </View>
      
    );
}



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    fixedRatio: {
      backgroundColor: 'rebeccapurple',
      flex: 1,
      aspectRatio: 1
    },
  });