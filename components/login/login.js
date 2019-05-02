import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import LoginForm from './loginForm'

class LoginPage extends Component {
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

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainerOuter}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>FOLD</Text>
          </View>
        </View>
        <LoginForm />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateImage: () => dispatch(updateImageAction()),
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
