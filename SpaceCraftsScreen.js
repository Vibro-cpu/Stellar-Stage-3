import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SpaceCraftsScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Space Crafts of History</Text>
      </View>
    );
  }
}
