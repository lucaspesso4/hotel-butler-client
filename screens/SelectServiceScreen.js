import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
    title: 'Selecione o Serviço',
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
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Serviço de Quarto"
            type="outline"
            buttonStyle={styles.myButtonBorder}
            titleStyle={styles.myButtonText}
            onPress={() => navigate('RoomService')} />
          <Button
            title="Serviço de Alimentação"
            type="outline"
            buttonStyle={styles.myButtonBorder}
            titleStyle={styles.myButtonText}
            onPress={() => navigate('FoodService')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myButtonBorder: {
    borderRadius: 20,
    borderColor: '#fdc100',
    borderWidth: 2,
    marginBottom: 20,
    paddingLeft: 40,
    paddingRight: 40
  },
  myButtonText: {
    color: '#4d4d4d'
  }
});