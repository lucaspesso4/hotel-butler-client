import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

export default class RoomServiceScreen extends React.Component {
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
      checked: false,
      itens:[
        { name: 'Cama', checked: false },
        { name: 'Mesa', checked: false },
        { name: 'Banho', checked: false },
      ]
    }
  }

  handleCheck(key) {
    let itens = [ ... this.state.itens ];
    let item = { ...itens[key] };
    item.checked ? item.checked = false : item.checked = true;
    itens[key] = item;
    this.setState({
      itens
    });
  }

  renderList() {
    let itens = this.state.itens;
    
    let checkboxes = itens.map(item => {
      return (
        <CheckBox
          key={ item }
          title={ item.name }
          checked={ item.checked } 
          /*onPress={ () => this.handleCheck(key) }*/  />
      );
    });

    return checkboxes;
  }

	render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={ styles.container }>
        <ScrollView>
          { this.renderList() }
        </ScrollView>
        <Button 
          title="Confirmar Pedido"
          type="outline"
          buttonStyle={styles.myButtonBorder}
          titleStyle={styles.myButtonText}
          onPress={() => navigate('RoomConfirmation')} />
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
    color: '#4d4d4d'
  }
});