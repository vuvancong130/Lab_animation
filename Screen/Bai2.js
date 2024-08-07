import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Bai2 = () => {
  const viewableItems = useSharedValue([]);

  const data = [
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'},
    {id: '6'},
    {id: '7'},
    {id: '8'},
    {id: '9'},
    {id: '10'},
    {id: '11'},
    {id: '12'},
  ];

  const ListItem = React.memo(({item, viewableItems}) => {
    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter(viewableItem => viewableItem.isViewable)
          .find(viewableItem => viewableItem.item.id === item.id),
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0, {duration: 500}),
        transform: [{scale: withTiming(isVisible ? 1 : 0.6, {duration: 500})}],
      };
    }, [viewableItems]);

    return (
      <Animated.View style={[styles.item, rStyle]}>
        <Text style={styles.text}>{item.id}</Text>
      </Animated.View>
    );
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        onViewableItemsChanged={({viewableItems: vItems}) => {
          viewableItems.value = vItems;
        }}
        renderItem={({item}) => (
          <ListItem item={item} viewableItems={viewableItems} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Bai2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 80,
    backgroundColor: '#f9c2ff',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});
