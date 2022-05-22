import { Text, View } from 'react-native'
import React, { Component } from 'react'
import HomePage from './HomePage'

export default class ViewPort extends Component {
  render() {
    return (
      <View>
        <HomePage/>
      </View>
    )
  }
}