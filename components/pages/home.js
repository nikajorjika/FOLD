import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class HomePage extends Component {
  render () {
    return (
      <View>
        <Text>Home Page</Text>
        <Button title="Login" onPress={()=> this.props.navigation.navigate('Login')}/>
      </View>
    )
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
