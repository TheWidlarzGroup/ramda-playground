import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
  },
})

const Home = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Welcome to</Text>
    <Text style={styles.title}>Ramda Playground</Text>
  </SafeAreaView>
)

export default Home
