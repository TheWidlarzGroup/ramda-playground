import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

/**
  Authentication
 */

// for useNavigation hook
export type AuthNavigationType<
  RouteName extends keyof AuthenticationRoutes
> = CompositeNavigationProp<
  StackNavigationProp<AuthenticationRoutes, RouteName>,
  StackNavigationProp<HomeRoutes, 'Home'>
>

export interface AuthNavigationProps<RouteName extends keyof AuthenticationRoutes> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    StackNavigationProp<HomeRoutes, 'Home'>
  >
  route: RouteProp<AuthenticationRoutes, RouteName>
}

/**
  Home
 */

// for useNavigation hook
export type HomeNavigationType<RouteName extends keyof HomeRoutes> = StackNavigationProp<
  HomeRoutes,
  RouteName
>

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: StackNavigationProp<HomeRoutes, RouteName>
  route: RouteProp<HomeRoutes, RouteName>
}

/**
  Types
 */

export type AppRoutes = {
  Authentication: undefined
  Home: undefined
}

export type AuthenticationRoutes = {
  Login: undefined
  Signup: undefined
}

export type HomeRoutes = {
  Home: undefined
  Reanimated2Test: undefined
}
