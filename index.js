import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
// eslint-disable-next-line import/no-unresolved
import App from './App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)
