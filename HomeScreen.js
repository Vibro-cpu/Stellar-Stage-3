import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

import DailyPicScreen from '../screens/DailyPicScreen';
import SpaceCraftsScreen from '../screens/SpaceCraftsScreen';
import StarMapScreen from '../screens/StarMapScreen';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/stars.gif')}>
          <Text>The Stellar Plane</Text>
        </ImageBackground>
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('SpaceCrafts')}>
          <Text style={styles.routeText}>Space Crafts</Text>
          <Image
            style={{ width: 80, height: 80 }}
            source={require('../assets/spacecraft.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('DailyPic')}>
          <Text style={styles.routeText}>Tonight Sky</Text>
          <Image
            style={{ width: 80, height: 80 }}
            source={require('../assets/daily_pictures.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('StarMap')}>
          <Text style={styles.routeText}>Star Map</Text>
          <Image
            style={{ width: 80, height: 80 }}
            source={require('../assets/star_map.png')}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    paddingLeft: 30,
  },
  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1,
  },
  issImage: {
    position: 'absolute',
    height: 200,
    width: 200,
    resizeMode: 'contain',
    right: 20,
    top: -80,
  },
  meteorImage: {
    position: 'absolute',
    height: 300,
    width: 300,
    resizeMode: 'contain',
    right: 30,
    top: -120,
  },
});
