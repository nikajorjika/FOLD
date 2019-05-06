import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import EventList from './page-components/event-list'

export default class HomePage extends Component {
  static navigationOptions = {
    title: 'Event List',
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
        <EventList navigation={this.props.navigation} title={'Upcoming Events'} />
        <EventList navigation={this.props.navigation} title={'Upcoming Events'} />
        <EventList navigation={this.props.navigation} title={'Upcoming Events'} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#5887FF',
  },
})
