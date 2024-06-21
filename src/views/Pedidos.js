import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Button, List, MD3Colors  } from 'react-native-paper';





const MyComponennt = props => (

    <ScrollView>
    <Card style={{backgroundColor:'#d9d9d9', marginTop: 20}}>
    <Card.Content>
      <Text style={{ fontWeight: 'bold', fontSize: 23, color: "#00003d" }}>Status da atual doação</Text>
      <Text style={{color:'green', fontSize: 17}}>Doação realizada:</Text>
      <Text>Cama Box Casal Colchão Molas Qatar 138x188x60cm </Text>
    </Card.Content>
    </Card>


    <List.Section style={{margin:10}}>
    <List.Subheader style={{ fontWeight: 'bold', fontSize: 18, color: "#00003d", marginTop: 20 }}>Rastreio</List.Subheader>
    <List.Item title="Doação confirmado" left={() => <List.Icon icon="check-circle" />} />
    <List.Item left={() => <List.Icon icon="timeline-clock-outline" />} />
    <List.Item title="Doação está a caminho"   left={() => <List.Icon icon="truck" />} />
    <List.Item left={() => <List.Icon icon="timeline-clock-outline" />} />
    <List.Item title="Doação realizada com sucesso" left={() => <List.Icon icon="map-marker" />} />
  </List.Section>
 


  
    </ScrollView>
);

export default MyComponennt 

