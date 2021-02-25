import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeRoutes } from '../../navigation/Navigation'
import Home from './Home'
import Reanimated2Test from './Reanimated2Test'

const HomeStack = createStackNavigator<HomeRoutes>()

export const HomeNavigator = () => (
  <HomeStack.Navigator headerMode="none" initialRouteName="Home">
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Reanimated2Test" component={Reanimated2Test} />
  </HomeStack.Navigator>
)
