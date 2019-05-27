import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore_ref from './../config/fb_conf';

export default class FoodServiceScreen extends React.Component {
  static navigationOptions = {
    title: 'Serviço de Alimentação',
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
        { name: 'Pão na Chapa', value: 3.90, number: 0 },
        { name: 'Pão com Queijo', value: 5.90, number: 0 },
        { name: 'Misto Quente', value: 6.90, number: 0 },
        { name: 'Ovos com Bacon', value: 8.90, number: 0 },
        { name: 'Café 250ml', value: 4.90, number: 0 },
        { name: 'Leite 250ml', value: 4.90, number: 0 },
        { name: 'Chocolate 250ml', value: 4.90, number: 0 },
        { name: 'Cheese Burguer', value: 14.60, number: 0 },
        { name: 'Duplo Burguer', value: 17.60, number: 0 },
        { name: 'Cheese Bacon Egg', value: 15.90, number: 0 },
        { name: 'Poção de Fritas', value: 12.30, number: 0 },
        { name: 'Pastel de Carne 10un', value: 19.90, number: 0 },
        { name: 'Pastel de Queijo 10un', value: 19.90, number: 0 },
        { name: 'Omelete com Salada', value: 20.60, number: 0 },
        { name: 'Iscas de Peixe', value: 24.90, number: 0 },
        { name: 'Filé Mignon', value: 34.70, number: 0 },
        { name: 'Lombinho c/ Mandioca', value: 24.90, number: 0 },
        { name: 'Escondidinho de Carne', value: 29.90, number: 0 },
        { name: 'Suco de Cajá 500ml', value: 6.50, number: 0 },
        { name: 'Suco de Caju 500ml', value: 6.50, number: 0 },
        { name: 'Suco de Laranja 500ml', value: 6.50, number: 0 },
        { name: 'Suco de Goiaba 500ml', value: 6.50, number: 0 },
        { name: 'Suco de Maracujá 500ml', value: 6.50, number: 0 },
        { name: 'Suco de Morango 500ml', value: 6.50, number: 0 }
      ],
      total: 0
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

  plus(index) {
    let itens = [ ... this.state.itens ];
    let item = { ...itens[index] };
    item.number = item.number + 1;
    itens[index] = item;
    let total = this.state.total;
    total = total + item.value;
    this.setState({
      itens,
      total
    });
  }

  less(index) {
    if(this.state.itens[index].number > 0) {
      let itens = [ ... this.state.itens ];
      let item = { ...itens[index] };
      item.number = item.number - 1;
      itens[index] = item;
      let total = this.state.total;
      total = total - item.value;
      this.setState({
        itens,
        total
      });
    }
  }

  createDocument() {
    if (this.state.total == 0) {
      return alert('Não podemos efetuar um pedido vazio :(');
    } else {
      const itensArray = this.state.itens;
      let foodOrder = [];
      /* push checked itens only */
      itensArray.map((item) => {
        if(item.number > 0) {
          let json = { nome: item.name, quantidade: item.number }
          foodOrder.push(json);
        }
      });
      /* create order object to populate */
      let order = {
        atendimentoPendente: true,
        numeroQuarto: 101,
        pedido: [],
        total: this.state.total.toFixed(2)
      };
      /* populate order object with array */
      foodOrder.forEach(element => {
        order.pedido.push(element);
      });
      console.log('ORDER JSON', order);
      return order;
    }
  }

  async addDocumentAndNavigate() {
    try {
      /* firebase conn */
      const db = firestore_ref.collection('/servicosDeCozinha');
      /* create order json */
      const json_document = this.createDocument();
      /* adding order to firebase */
      await db.add(json_document)
            .then((docRef) => {
              console.log("document added: ", docRef.id);
              const {navigate} = this.props.navigation;
              navigate('FoodConfirmation');
            })
            .catch((err) => {
            console.error("error adding document: ", err);
            });
    } catch(err) {
      alert('Ocorreu um erro ao efetuar o pedido. Verifique sua conexão e tente novamente.')
    }
  }

  renderList() {
    let itens = this.state.itens;
    let checkboxes = itens.map((item, index) => {
      return(      
        <View style={styles.flex} key={index}>
          <Text style={styles.title}>{item.name}</Text>

          <View style={styles.counter}>
            <Text style={styles.value}>R$ {item.value.toFixed(2)}</Text>
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
              onPress={() => this.less(index)} />
            <Text style={styles.counterNumber}>{item.number}</Text>
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
              onPress={() => this.plus(index)} />
          </View>
        </View>
      );
    });
    return checkboxes;
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderList()}
        </ScrollView>
        <Text style={styles.totalText}>Total: R$ {this.state.total.toFixed(2)}</Text>
        <Button 
          title="Confirmar Pedido"
          type="outline"
          buttonStyle={styles.myButtonBorder}
          titleStyle={styles.myButtonText}
          onPress={() => this.addDocumentAndNavigate()} />
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