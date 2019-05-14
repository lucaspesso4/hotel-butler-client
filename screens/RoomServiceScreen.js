import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import firestore_ref from './../config/fb_conf';

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
    
    let checkboxes = itens.map((item, index) => {
      return (
        <CheckBox
          key={ index }
          title={ item.name }
          checked={ item.checked } 
          onPress={ () => this.handleCheck(index) }  />
      );
    });

    return checkboxes;
  }

  createDocument() {
    const itensArray = this.state.itens;
    let itensToChange = [];
    /* push checked itens only */
    itensArray.map((item) => {
      if(item.checked == true) {
        itensToChange.push(item.name);
      }
    });
    /* create order object to populate */
    let order = {
      atendimentoPendente: true,
      numeroQuarto: 101,
      itensParaTroca: []
    };
    /* populate order object with array */
    itensToChange.forEach(element => {
      order.itensParaTroca.push(element);
    });

    console.log('ORDER JSON', order);
    return order;
  }

  async addDocumentAndNavigate() {
    /* firebase conn */
    const db = firestore_ref.collection('/servicosDeQuarto');
    /* create order json */
    const json_document = this.createDocument();
    /* adding order to firebase */
    await db.add(json_document)
          .then((docRef) => {
            console.log("document added: ", docRef.id);
            const {navigate} = this.props.navigation;
            navigate('RoomConfirmation');
          })
          .catch((err) => {
           console.error("error adding document: ", err);
          });
    }

	render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderList()}
        </ScrollView>
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