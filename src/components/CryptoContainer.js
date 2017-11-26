import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

  componentDidMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;

    return crypto.data.map((coin, index) => 
      <CoinCard 
        key={index}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
      />
    )
  }

  render() {
    const { crypto } = this.props;

    console.log('render just ran')

    // // if fetching..
    if (crypto.data == []) {
      return (
        <View>
          <Spinner 
            visible={crypto.isFetching}
            textContent={"Loading..."}
            textStyle={{color: '#253145'}}
            animation='fade'
          />
      </View>
      )
    }

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    )
  }
}

const styles = {
  contentContainer: {
    // backgroundColor: '#ccc',
    paddingBottom: 100,
    paddingTop: 55
  }
}

function mapStatetoProps(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStatetoProps, { FetchCoinData })(CryptoContainer)