import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { login } from '../../actions'

export default class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: false
    }
  }
  loginUser () {
    this.setState({loading: true})
    // Log In User here
    store.dispatch(login({ username: 'nikajorjika', password: '123123' }))

  }
  render () {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Username / E-mail' style={{ ...styles.inputField, ...styles.usernameInput}}/>
        <TextInput placeholder='Password' secureTextEntry={true} style={{ ...styles.inputField, ...styles.passwordInput}}/>
        <View style={styles.buttonContainer} >
          <TouchableOpacity onPress = {() => this.loginUser()}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = {
  container: {
    flex: 1
  },
  inputField: {
    backgroundColor: '#102E4A',
    margin: 20,
    padding: 10
  },
  usernameInput: {

  },
  passwordInput: {

  },
  buttonContainer: {
    backgroundColor: 'purple',
    margin: 20
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff'
  }
}