import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native'

export default class EventCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://placekitten.com/250/100' }}
        />
        <Text style={styles.eventName}>{this.props.event.name}</Text>
        <Text style={styles.eventDescription}>
          {this.props.event.description}
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
          style={styles.buttonContainer}
        >
          <View>
            <Text style={styles.buttonText}>BUY TICKETS</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
  },
  eventName: {
    fontSize: 18,
    padding: 20,
  },
  eventDescription: {
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 15,
    marginTop: 12,
  },
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  buttonContainer: {
    backgroundColor: 'purple',
    padding: 20,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
})
