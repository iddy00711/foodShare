import { Text, View, } from 'react-native'
import React, { Component } from 'react'
import ScrollBar from './ScrollBar'

export default class HomePage extends Component {
  render() {
    return (
      <View>
        <ScrollBar/>
      </View>
    )
  }
}