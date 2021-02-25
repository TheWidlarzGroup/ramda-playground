/**
 * Reanimated 2
 */

// @ts-ignore https://github.com/wcandillon/react-native-redash/issues/395
global.__reanimatedWorkletInit = () => {}

jest
  .mock('react-native-reanimated', () => ({
    ...require('react-native-reanimated/mock'),
  }))
  .mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

/**
 * react-navigation
 */

const mockedNavigation = jest.fn()

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockedNavigation,
  }),
}))

export { mockedNavigation }
