import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default class Counter extends Component {
  render() {
    return(
      <View style={styles.list}>
				<Button
					title="-" onPress={() => this.props.less} />
				<Button
					title="+" onPress={() => this.props.plus} />
			</View>
    );
  }
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
		flexDirection: 'row'
	}
});