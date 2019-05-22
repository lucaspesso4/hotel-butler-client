import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
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
      itens:[
        { name: 'Café', value: 1.50, checked: false },
        { name: 'Pão', value: 1.50, checked: false },
        { name: 'Almoço', value: 1.50, checked: false },
        { name: 'Café', value: 1.50, checked: false },
        { name: 'Pão', value: 1.50, checked: false },
        { name: 'Almoço', value: 1.50, checked: false },
        { name: 'Café', value: 1.50, checked: false },
        { name: 'Pão', value: 1.50, checked: false },
        { name: 'Almoço', value: 1.50, checked: false },
        { name: 'Café', value: 1.50, checked: false },
        { name: 'Pão', value: 1.50, checked: false },
        { name: 'Almoço', value: 1.50, checked: false },
        { name: 'Café', value: 1.50, checked: false },
        { name: 'Pão', value: 1.50, checked: false },
        { name: 'Almoço', value: 1.50, checked: false },
        { name: 'Café', value: 1.50, checked: false },
        { name: 'Pão', value: 1.50, checked: false },
        { name: 'Almoço', value: 1.50, checked: false },
        { name: 'Café', value: 1.50, checked: false },
        { name: 'Pão', value: 1.50, checked: false },
        { name: 'Almoço', value: 1.50, checked: false },
        { name: 'Café', value: 1.50, checked: false },
        { name: 'Pão', value: 1.50, checked: false },
        { name: 'Almoço', value: 1.50, checked: false },
      ],
      number: 0
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

  plus() {
    this.setState({
      number: this.state.number + 1
    })
  }

  less() {
    this.setState({
      number: this.state.number - 1
    })
  }

  renderList() {
    let itens = this.state.itens;
    let checkboxes = itens.map((item, index) => {
      return(      
        <View style={styles.flex} key={index}>
          <Text style={styles.title}>{item.name}</Text>

          <View style={styles.counter}>
            <Text style={styles.value}>R$ {item.value}</Text>
            <Button 
              icon={
                <Icon
                  name="minus"
                  size={10}
                  color="#4d4d4d" />
              }
              type="outline"
              buttonStyle={styles.myButtonBorder}
              titleStyle={styles.myButtonText}
              onPress={() => this.less()} />
            <Text style={styles.counterNumber}>{this.state.number}</Text>
            <Button 
              icon={
                <Icon 
                  name="plus"
                  size={10}
                  color="#4d4d4d" />
              }
              type="outline"
              buttonStyle={styles.myButtonBorder}
              titleStyle={styles.myButtonText}
              onPress={() => this.plus()} />
          </View>
        </View>
      );
    });
    return checkboxes;
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderList()}
        </ScrollView>
        <Text style={styles.totalText}>Total: R$ 00,00</Text>
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
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 10
  },
  titleWrapper: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 15,
    color: '#4d4d4d',
    fontWeight: '600'
  },
  value: {
    fontSize: 15,
    color: '#4d4d4d',
    fontWeight: '400'
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
  },
  counter: {
    flexDirection: 'row'
  },
  counterNumber: {
    fontSize: 16,
    fontWeight: '400'
  },
  totalText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4d4d4d',
    alignSelf: 'flex-end',
    marginBottom: 10,
    marginRight: 15,
    marginTop: 10
  }
});