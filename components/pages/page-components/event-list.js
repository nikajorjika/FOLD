import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { addEvents } from '../../../actions/index'
import { events } from '../../../reducers/events'
import EventCard from './single-event-item'
import Carousel from 'react-native-snap-carousel'

const deviceWidth = Math.round(Dimensions.get('window').width)

class EventList extends Component {
  constructor(props) {
    super(props)
    this.props.addEvents(events)
    this.state = {
      windowWidth: Math.round(Dimensions.get('window').width),
      windowHeight: Math.round(Dimensions.get('window').height),
    }
  }

  _renderItem(item) {
    return <EventCard navigation={this.props.navigation} event={item} />
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.blockTitle}>{this.props.title}</Text>
        <Carousel
          ref={c => {
            this._carousel = c
          }}
          containerCustomStyle={{ width: '80%' }}
          itemHeight={600}
          sliderHeight={600}
          layout={'default'}
          data={this.props.events}
          sliderWidth={this.state.windowWidth}
          itemWidth={this.state.windowWidth - 80}
          renderItem={({ item }) => {
            return this._renderItem(item)
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 600,
  },
  blockTitle: {
    fontSize: 28,
    marginBottom: 20,
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
  },
})

const mapStateToProps = state => ({
  events: state.events,
})

const mapDispatchToProps = dispatch => ({
  addEvents: events => {
    dispatch(addEvents(events))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList)
