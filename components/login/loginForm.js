import React from 'react'
import {View, TextInput} from 'react-native'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <View>
          <TextInput />
      </View>
    )
  }
}