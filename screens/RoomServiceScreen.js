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
      itens: [
        {title: 'Cama', checked: false},
        {title: 'Mesa', checked: false},
        {title: 'Banho', checked: false},
      ]
    }
  }

	render() {
    const {navigate} = this.props.navigation;
    let itens = this.state.itens;
    console.log('********************', itens)
    return (
      <View style={styles.container}>
        <ScrollView>
          {itens.map((key, item) => (
            <CheckBox
              title={ item.title }
              checked={ item.checked }
              onPress={ () => itens[key].checked = !item[key].checked } /> )
          )}
          
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