import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import LoginForm from './loginForm'

export default class LoginPage extends Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#5887FF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.logoContainerOuter}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>FOLD</Text>
          </View>
        </View>
        <LoginForm/>
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#5887FF',
    alignContent: 'center',
  },

  logoContainerOuter: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 60
  },
  logoContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 100,
    height: 100,
    backgroundColor: '#fff'
  },
  logo: {
    textAlign: 'center',
    fontSize: 30,
  }
}
