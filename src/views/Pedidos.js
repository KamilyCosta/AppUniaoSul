import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Button } from 'react-native-paper';


const MyComponennt = props => (

    <ScrollView>
    <Card style={{backgroundColor:'#d9d9d9', marginTop: 20}}>
    <Card.Content>
      <Text style={{ fontWeight: 'bold', fontSize: 23, color: "#00003d" }}>Status da atual doação</Text>
      <Text style={{color:'green', fontSize: 17}}>Doação realizada:</Text>
      <Text>Cama Box Casal Colchão Molas Qatar 138x188x60cm </Text>
    </Card.Content>
  </Card>
    </ScrollView>
);

export default MyComponennt 

