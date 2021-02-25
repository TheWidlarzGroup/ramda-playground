import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import R from 'ramda'
import { SafeAreaView } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    margin: 30,
    backgroundColor: 'salmon',
  },
})

const Reanimated2Test = () => {
  const test = useSharedValue(100)

  const testOnClick = (value: Animated.SharedValue<number>) => () =>
    R.ifElse(
      R.propEq('value', 100),
      () => (value.value = withSpring(300)),
      () => {
        value.value = withTiming(100, {
          duration: 666,
          easing: Easing.circle,
        })
      }
    )(value)

  const testStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: 'red',
      width: test.value,
      height: test.value,
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={testStyle} testID="test-reanimated2-comp" />
      <Pressable onPress={testOnClick(test)} style={styles.button}>
        <Text>magic here</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Reanimated2Test
