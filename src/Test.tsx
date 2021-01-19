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
      <TouchableOpacity
        onPress={() => {
          if (test.value === 0) {
            test.value = withSpring(200);
          } else {
            test.value = withTiming(0, {duration: 666, easing: Easing.circle});
          }
        }}>
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
