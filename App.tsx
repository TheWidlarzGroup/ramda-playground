import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {SafeAreaView, StyleSheet, View, StatusBar, Text} from 'react-native'
import Test from './src/Test'
import {TouchableOpacity} from 'react-native-gesture-handler'

const Stack = createStackNavigator()

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Test />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home2')
            }}>
            <Text style={{padding: 10}}>Navigate test</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}

const HomeScreen2 = ({navigation}: {navigation: any}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}>
            <Text>Navigate test back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home2" component={HomeScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
