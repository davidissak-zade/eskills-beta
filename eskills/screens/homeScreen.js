import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react';

const homeScreen = () => {
    return (

      <View style>
        <Text>hello</Text>
      <View style={styles.container}>
        <View style={[styles.right, styles.top,   { backgroundColor: "powderblue" }]}/>
        <View style={[styles.left, styles.top, { backgroundColor: "powderblue" }]}/>
        <View style={[styles.bottom, styles.right, { backgroundColor: "powderblue" }]}/>
        <View style={[styles.bottom, styles.left, { backgroundColor: "powderblue" }]}/>
      </View>
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
    right: {
     right: 50, 
    },
    top: {
      top: 50,
    },
    bottom: {
      bottom:50,
    },
    left: {
      left:50,
    },
  });