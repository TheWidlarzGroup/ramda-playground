import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeRoutes } from '../../navigation/Navigation'
import Home from './Home'

const HomeStack = createStackNavigator<HomeRoutes>()

export const HomeNavigator = () => (
  <HomeStack.Navigator headerMode="none" initialRouteName="Home">
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
)
