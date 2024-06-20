import * as React from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, TextInput } from 'react-native-paper';

const MyComponent = () => {
    return (
        <ScrollView>
            <Card style={{ marginTop: 15 }}>
                <Card.Content>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, color: "#00003d" }}>Água Mineral </Text>
                    <Card.Cover source={{ uri: 'https://attachments.office.net/owa/kamily.costa%40portalsesisp.org.br/service.svc/s/GetAttachmentThumbnail?id=AAMkAGZkYWFkZjEwLTE3NTgtNDkwNC1hNTNiLWRiYzQyYzA4MmE1YQBGAAAAAADYcovAusobTqlMsgmz7xf9BwBwcC6Dr2SDQbD2yTXEpg%2BdAAAAAAEMAABwcC6Dr2SDQbD2yTXEpg%2BdAAXUUZLYAAABEgAQAKHyKzy7C0RFtSdh42WTP9c%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkU1RDJGMEY4REE5M0I2NzA5QzQzQTlFOEE2MTQzQzAzRDYyRjlBODAiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI1ZEx3LU5xVHRuQ2NRNm5vcGhROEE5WXZtb0EifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiMGQ4MzNhYzE5NWIwNDQwZGFiNzk2MGQzNzBiYmE2MTgiLCJpbl9jb3JwIjoidHJ1ZSIsInNpZ25pbl9zdGF0ZSI6Imttc2kiLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQGIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHVpZFwiOlwiMTE1Mzk3NzAyNTcxNzc5MjIzNlwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCIsXCJvaWRcIjpcImZlMTE2MzVjLTc0MDQtNDMzMy04MmRjLTljMTFiMTg2ZTM5ZVwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTUtMjEtMzI0MzUzODQ4Mi0yMzgwNjQwMTA3LTYzNDg0NjgtMTcyMjQwMThcIn0iLCJuYmYiOjE3MTg4OTAxNDMsImV4cCI6MTcxODg5MDQ0MywiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQGIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QGIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCIsImhhcHAiOiJvd2EifQ.Crj4t6-TFyrH53irzaB34-MQk8zsi-LdHXSi0FeZ20o0JNPqJ5xtRlTxk1aIoVYV9BAIph2gKCjItWov42tr4x98RcabPTDNAfg5LAN5oADzjmGgcMCbl6uyrYHPLbrn1hcsMiAnig5xZdVLSfq5xHyItqkLlFxm5Zad8pW8i5aOtTfb4GSqGGcm1_dVpspYK7AegzwX7-ReHLaPWKEmeY_oExUGFo1p-5cDXTG_ZD8re1z3NNg7q33jH3euMdxZ-KecuyrOspKF0sVpTXk8Oye3BHKAJV63FJhf69yhdqbH0SmzgipvIBo1r3mAUaq20OOkv2hrwmFDAau_5OZuxQ&X-OWA-CANARY=bdvoV5Aj--gAAAAAAAAAAGBLpfMskdwYlTGd1JOrYpY-kFGKy4q91Evgxz3C62ZFcBEP05X48fc.&owa=outlook.office365.com&scriptVer=20240607002.20&clientId=80B41ECF7F304B4283AE8BC02977A233&animation=true' }}
                    />

                    <Text variant="bodyMedium">Pack com 6 garrafas pet de 1,5Lt cada</Text>
                    <Text variant="bodyMedium">Doar água mineral é uma ação essencial para ajudar comunidades em situações de emergência!</Text>

                    <Text variant="bodyMedium" style={{ color: 'green', marginTop: 30 }}>10% de desconto</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20}}>R$ 20,00</Text>
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
           
        </ScrollView>
    );
};

export default MyComponent;

