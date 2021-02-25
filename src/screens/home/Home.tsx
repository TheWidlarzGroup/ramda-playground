import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeNavigationType } from '../../navigation/Navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
  },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    margin: 30,
    backgroundColor: 'salmon',
  },
})

const Home = ({}) => {
  const navigation = useNavigation<HomeNavigationType<'Home'>>()

  const navigateToReanimatedTest = () => {
    navigation.navigate('Reanimated2Test')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title}>Ramda Playground</Text>
      <Text>Login</Text>
      <Pressable onPress={navigateToReanimatedTest} style={styles.button}>
        <Text>Go to Home Screen</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Home
