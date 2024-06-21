import * as React from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';

const MyComponent = (props) => {
    return (
        <ScrollView>
            <Card>
      <Card.Content>
                <Text style={{fontWeight:'bold', fontSize: 25, color: "#00003d"}} >Cama Casal</Text>
                <Card.Cover source={{ uri: 'https://attachments.office.net/owa/kamily.costa%40portalsesisp.org.br/service.svc/s/GetAttachmentThumbnail?id=AAMkAGZkYWFkZjEwLTE3NTgtNDkwNC1hNTNiLWRiYzQyYzA4MmE1YQBGAAAAAADYcovAusobTqlMsgmz7xf9BwBwcC6Dr2SDQbD2yTXEpg%2BdAAAAAAEMAABwcC6Dr2SDQbD2yTXEpg%2BdAAXUUZLYAAABEgAQADGFSljb2uBPrgJ6cd9Nu4U%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkU1RDJGMEY4REE5M0I2NzA5QzQzQTlFOEE2MTQzQzAzRDYyRjlBODAiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI1ZEx3LU5xVHRuQ2NRNm5vcGhROEE5WXZtb0EifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiMGQ4MzNhYzE5NWIwNDQwZGFiNzk2MGQzNzBiYmE2MTgiLCJpbl9jb3JwIjoidHJ1ZSIsInNpZ25pbl9zdGF0ZSI6Imttc2kiLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQGIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHVpZFwiOlwiMTE1Mzk3NzAyNTcxNzc5MjIzNlwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCIsXCJvaWRcIjpcImZlMTE2MzVjLTc0MDQtNDMzMy04MmRjLTljMTFiMTg2ZTM5ZVwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTUtMjEtMzI0MzUzODQ4Mi0yMzgwNjQwMTA3LTYzNDg0NjgtMTcyMjQwMThcIn0iLCJuYmYiOjE3MTg4ODk4ODcsImV4cCI6MTcxODg5MDE4NywiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQGIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QGIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCIsImhhcHAiOiJvd2EifQ.djuGaARxHZPCKGg4PiOTMpsdtRVffz1PpMExVLJ_uAELbEWQlFDwbGkUMU9vU0tL3CgB-xY3zQ-j1u8xPFzHfp8dEotpg6KUMS7ySO7Qlt_e2w99NhH7K4Njajk84gb5xy7N6uAMboxw2riacvIEPIztm44BN6BSDoXp61ntyKRB_KdSKYBfytdQ-FgMLLX_e9omMd3iB4BqCLm-jjDqieRWAsn8OydYe8yni6lLY-QW5ichYHQ7bf-S9Qle0-C7ETrOulSBoQiJTJJ359ENOO8dHLWiUItau4ZH7FXLNxcWRrspBDmdHWvzPSK4PBLduqZslZ-hgMuCPdnvwm77gw&X-OWA-CANARY=bdvoV5Aj--gAAAAAAAAAAGB4hJIskdwYx_UCdk_lFWZDyY3tL6uigbDJMel4aVqB9FbccMfb0UM.&owa=outlook.office365.com&scriptVer=20240607002.20&clientId=80B41ECF7F304B4283AE8BC02977A233&animation=true' }}
                />

                <Text variant="bodyMedium">Cama Box Casal Colchão Molas Qatar 138x188x60cm</Text>
                <Text variant="bodyMedium">Cama Box Queen Size é a opção perfeita para sua doação!</Text>

                <Text variant="bodyMedium" style={{ color: 'green', marginTop: 30 }}>10% de desconto</Text>

                <Text style={{ fontWeight: 'bold', fontSize: 20}}>R$ 702,00</Text>
                


            </Card.Content>
        </Card>
            
           

            <TextInput 
                label="Nome"
                style={{backgroundColor:'#d9d9d9', marginTop:40, margin:10}}
            />


            <TextInput 
                label="E-mail"
                style={{backgroundColor:'#d9d9d9', margin:10}}
            />


            <TextInput 
                label="Endereço de Doação"
                style={{backgroundColor:'#d9d9d9', margin:10}}
            />
            <TextInput 
                label="Forma de Pagamento"
                style={{backgroundColor:'#d9d9d9', margin:10}}
            />
            <TextInput 
                label="Telefone"
                style={{backgroundColor:'#d9d9d9', margin:10}}
            />
            <TextInput 
                label="CPF"
                style={{backgroundColor:'#d9d9d9',margin:10}}
            />

<Button
                style={{marginTop: 10,  backgroundColor:'#448cf2'}}
                mode="contained"
                onPress={() => props.navigation.navigate('Pedidos')}>
                Finalizar
                </Button>
                <Button
                style={{marginTop: 10, backgroundColor:'#9da0a5'}}
                mode="contained"
                onPress={() => props.navigation.navigate('Produtos')}>
               Cancelar
                </Button>
           
        </ScrollView>
    );
};

export default MyComponent;

