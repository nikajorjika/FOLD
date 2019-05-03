import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../../actions/index'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loading: false
    }
  }

  loginUser() {
    this.setState({ loading: true })
    // Log In User here
    console.log(this.props.login(this.state.username, this.state.password))
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(text) => this.setState({username: text})} placeholder='Username / E-mail'
                   style={{ ...styles.inputField, ...styles.usernameInput }}/>
        <TextInput placeholder='Password' secureTextEntry={true}
                   onChangeText={(text) => this.setState({password: text})}
                   style={{ ...styles.inputField, ...styles.passwordInput }}/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.loginUser()}>
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
  },
  inputField: {
    backgroundColor: '#102E4A',
    margin: 20,
    padding: 10,
    color: '#f6f6f6'
  },
  usernameInput: {},
  passwordInput: {},
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

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login({ username: username, password: password })),
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
