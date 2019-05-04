import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FoodServiceScreen extends React.Component {
  static navigationOptions = {
    title: 'Serviço de Quarto',
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#4d4d4d',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#4d4d4d'
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  handleCheck() {
    this.state.checked ? this.setState({checked: true}) : this.setState({checked: true});
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <CheckBox
            title='Café (150ml)'
            checked={this.state.checked} />
          <CheckBox
            title='Cuscuz'
            checked={this.state.checked} />
          <CheckBox
            title='Cuscuz com Ovo'
            checked={this.state.checked} />
          <CheckBox
            title='Sanduíche Misto'
            checked={this.state.checked} />
          <CheckBox
            title='Achocolatado'
            checked={this.state.checked} />
          <CheckBox
            title='Frango'
            checked={this.state.checked} />
          <CheckBox
            title='Carne Bovina'
            checked={this.state.checked} />
          <CheckBox
            title='Porção de Arroz'
            checked={this.state.checked} />
          <CheckBox
            title='Porção de Baião'
            checked={this.state.checked} />
          <CheckBox
            title='Coca Cola 2L'
            checked={this.state.checked} />
          <CheckBox
            title='Coca Cola 1L'
            checked={this.state.checked} />
          <CheckBox
            title='Suco de Fruta (Jarra)'
            checked={this.state.checked} />
          <CheckBox
            title='Suco de Fruta (500ml)'
            checked={this.state.checked} />
          <CheckBox
            title='Sobremesa'
            checked={this.state.checked} />
        </ScrollView>
        <Button 
          title="Confirmar Pedido"
          type="outline"
          buttonStyle={styles.myButtonBorder}
          titleStyle={styles.myButtonText}
          onPress={() => navigate('FoodConfirmation')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    color: '#4d4d4d'
  },
  myButtonBorder: {
    borderRadius: 20,
    borderColor: '#fdc100',
    borderWidth: 2,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  myButtonText: {
    color: '#4d4d4d',
    marginLeft: 5
  }
});