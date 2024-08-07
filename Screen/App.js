import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
const App = () => {
  const toa_do_x = useSharedValue(0);
  const toa_do_y = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: withSpring(toa_do_x.value)},
      {translateY: toa_do_y.value},
    ],
  }));

  const handlePress = () => {
    toa_do_x.value += 10;
    toa_do_y.value += 10;
  };
  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <Text>App</Text>
      <Button title="di chuyen" onPress={handlePress} />
      <Animated.View style={[styles.box, animatedStyle]} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'cyan',
  },
});
