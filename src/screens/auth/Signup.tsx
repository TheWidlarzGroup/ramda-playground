import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthNavigationProps } from '../../navigation/Navigation'

type SignupProps = AuthNavigationProps<'Signup'>

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    margin: 30,
    backgroundColor: 'salmon',
  },
})

const Signup = ({ navigation }: SignupProps) => {
  const navigateToLogin = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView>
      <Text>Signup</Text>
      <Pressable onPress={navigateToLogin} style={styles.button}>
        <Text>Go to Login</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Signup
