import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from './screens/homeScreen';
import roadMap from './screens/roadMap';
import viewScreen from './screens/viewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name = "Home Screen" component = {homeScreen}/>
      //     <Stack.Screen name  = "Journey Screen" component = {roadMap}/>
      //     <Stack.Screen name = "View Screen" component = {viewScreen}/>
      //   </Stack.Navigator>
      // </NavigationContainer>
      <View>
        <Text>Hello!!!</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
