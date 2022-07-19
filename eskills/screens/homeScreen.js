import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react';

const homeScreen = () => {
    return (
      <View style>
        <Text>hello</Text>
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