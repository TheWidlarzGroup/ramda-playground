import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthNavigationType } from '../../navigation/Navigation'

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    margin: 30,
    backgroundColor: 'salmon',
  },
})

const Login = () => {
  const navigation = useNavigation<AuthNavigationType<'Login'>>()

  const navigateToSignup = () => {
    navigation.push('Signup')
  }

  const navigateToHomeScreen = () => {
    navigation.push('Home')
  }

  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Pressable onPress={navigateToHomeScreen} style={styles.button}>
        <Text>Go to Home Screen</Text>
      </Pressable>
      <Pressable onPress={navigateToSignup} style={styles.button}>
        <Text>Go to Signup</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Login
