import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthenticationRoutes } from '../../navigation/Navigation'
import Login from './Login'
import Signup from './Signup'

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>()

export const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none" initialRouteName="Login">
    <AuthenticationStack.Screen name="Login" component={Login} />
    <AuthenticationStack.Screen name="Signup" component={Signup} />
  </AuthenticationStack.Navigator>
)
