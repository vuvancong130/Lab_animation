import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Bai1 from './App';
import Bai2 from './Bai2';
import Bai3 from './Bai3';
const Screen1 = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <Button title="bài 1" onPress={() => props.navigation.navigate('Bai1')} />
      <Button title="bài 2" onPress={() => props.navigation.navigate('Bai2')} />
      <Button title="bài 3" onPress={() => props.navigation.navigate('Bai3')} />
    </View>
  );
};

const StackDemo = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackDemo.Navigator
        initialRouteName="Screen1"
        screenOptions={{
          headerShown: true,
          cardStyleInterpolator: ({current, layouts}) => ({
            cardStyle: {
              opacity: current.progress,
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
                {
                  scale: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1],
                  }),
                },
              ],
            },
          }),
        }}>
        <StackDemo.Screen
          name="Screen1"
          component={Screen1}
          headerShown={false}
        />
        <StackDemo.Screen name="Bai1" component={Bai1} />
        <StackDemo.Screen name="Bai2" component={Bai2} />
        <StackDemo.Screen name="Bai3" component={Bai3} />
      </StackDemo.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
