// React
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

// The Store
import Store from './src/Store';

// Components
import { Header, CryptoContainer } from './src/components';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  // //   flex: 1,
  //   backgroundColor: '#ccc',
  // //   alignItems: 'center',
  // //   justifyContent: 'center',
  // },
});
