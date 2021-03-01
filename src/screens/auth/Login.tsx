import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthNavigationType } from '../../navigation/Navigation'

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    margin: 30,
    backgroundColor: 'salmon',
    width: '90%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
})

const Login = () => {
  const navigation = useNavigation<AuthNavigationType<'Login'>>()

  const navigateToSignup = () => {
    navigation.navigate('Signup')
  }

  const navigateToHomeScreen = () => {
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <Pressable onPress={navigateToHomeScreen} style={styles.button}>
        <Text>Go to Home Screen</Text>
      </Pressable>
      <Pressable onPress={navigateToSignup} style={styles.button}>
        <Text>Go to Signup</Text>
      </Pressable>
      <Image source={require('../../assets/RamdaLogo.png')} resizeMode="contain" />
    </SafeAreaView>
  )
}

export default Login
