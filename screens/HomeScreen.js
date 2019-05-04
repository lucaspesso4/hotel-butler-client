import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
    title: 'Hotel Buttler',
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#4d4d4d',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#4d4d4d'
    },
  };
	render() {
    const {navigate} = this.props.navigation;
    return (
    	<TouchableOpacity style={styles.container} onPress={() => navigate('SelectService')}>
      	<View>
      		<Text style={styles.welcomeText}>BEM VINDO(A)!</Text>
      		<Text style={styles.touchText}>(Toque na tela para continuar)</Text>
      	</View>
    	</TouchableOpacity>
    );
  }
}

//const {HEIGHT, WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	},
	welcomeText: {
		fontSize: 50,
		color: '#4d4d4d',
	},
	touchText: {
		marginTop: 20,
		textAlign: 'center'
	}
});