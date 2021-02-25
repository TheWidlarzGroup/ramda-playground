import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { AuthenticationNavigator } from '../screens/auth'
import { HomeNavigator } from '../screens/home'
import { AppRoutes } from './Navigation'

const AppStack = createStackNavigator<AppRoutes>()

const AppStackContainer = () => (
  <NavigationContainer>
    <AppStack.Navigator headerMode="none" initialRouteName="Authentication">
      <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
      <AppStack.Screen name="Home" component={HomeNavigator} />
    </AppStack.Navigator>
  </NavigationContainer>
)

export default AppStackContainer
