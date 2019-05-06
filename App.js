import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import LoginPage from './components/login/login'
import HomePage from './components/pages/home'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/index'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const store = createStore(reducers)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigatorContainer />
      </Provider>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
  },
  Login: {
    screen: LoginPage,
  },
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
const AppNavigatorContainer = createAppContainer(AppNavigator)
