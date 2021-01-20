import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import R from 'ramda';

const testOnClick = (value: Animated.SharedValue<number>) => () =>
  R.ifElse(
    R.propEq('value', 0),
    () => (value.value = withSpring(300)),
    () => {
      value.value = withTiming(0, {
        duration: 666,
        easing: Easing.circle,
      });
    },
  )(value);

const Test = () => {
  const test = useSharedValue(100);

  const testStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: 'red',
      width: test.value,
      height: test.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={testStyle} />
      <TouchableOpacity onPress={testOnClick(test)}>
        <Text>magic here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
});
