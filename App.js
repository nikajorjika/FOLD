import React, { Component } from 'react'
import { AsyncStorage, StyleSheet, Text, View } from 'react-native'
import LoginPage from './components/login/login'
import HomePage from './components/pages/home'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  isAuth() {
    return false
  }
  render() {
    return this.isAuth() ? (<HomePage />) : (<LoginPage />)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
