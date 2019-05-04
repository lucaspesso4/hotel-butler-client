import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FoodServiceConfirmationScreen extends React.Component {
	static navigationOptions = {
    title: 'Confirmação de Pedido',
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
    	<TouchableOpacity style={styles.container} onPress={() => navigate('Home')}>
      	<Text style={styles.title}>Pedido Feito com Sucesso!</Text>
        <View style={styles.iconWrapper}>
          <Icon 
            reverse
            name="check"
            size={270}
            color="#fff"
          />
        </View>
        <Text>(toque na tela para continuar)</Text>
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
  title: {
    fontSize: 20,
    color: '#4d4d4d'
  },
  iconWrapper: {
    width: 300,
    height: 300,
    backgroundColor: '#fdc100',
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 50
  }
});