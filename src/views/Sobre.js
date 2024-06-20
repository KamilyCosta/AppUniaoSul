
import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Card } from 'react-native-paper';

const MyComponent = () => (

    <ScrollView>
        <Card>
            <Card.Content>
            <Text  style={{fontWeight:'bold', fontSize: 25, color: "#00003d"}} >União Sul</Text>
                <Card.Cover source={{ uri: 'https://attachments.office.net/owa/kamily.costa%40portalsesisp.org.br/service.svc/s/GetAttachmentThumbnail?id=AAMkAGZkYWFkZjEwLTE3NTgtNDkwNC1hNTNiLWRiYzQyYzA4MmE1YQBGAAAAAADYcovAusobTqlMsgmz7xf9BwBwcC6Dr2SDQbD2yTXEpg%2BdAAAAAAEMAABwcC6Dr2SDQbD2yTXEpg%2BdAAXUUZLZAAABEgAQAOz7sJ3iLblJumC9DTFOass%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkU1RDJGMEY4REE5M0I2NzA5QzQzQTlFOEE2MTQzQzAzRDYyRjlBODAiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI1ZEx3LU5xVHRuQ2NRNm5vcGhROEE5WXZtb0EifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiMGQ4MzNhYzE5NWIwNDQwZGFiNzk2MGQzNzBiYmE2MTgiLCJpbl9jb3JwIjoidHJ1ZSIsInNpZ25pbl9zdGF0ZSI6Imttc2kiLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQGIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHVpZFwiOlwiMTE1Mzk3NzAyNTcxNzc5MjIzNlwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCIsXCJvaWRcIjpcImZlMTE2MzVjLTc0MDQtNDMzMy04MmRjLTljMTFiMTg2ZTM5ZVwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTUtMjEtMzI0MzUzODQ4Mi0yMzgwNjQwMTA3LTYzNDg0NjgtMTcyMjQwMThcIn0iLCJuYmYiOjE3MTg4ODc1NzAsImV4cCI6MTcxODg4ODE3MCwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQGIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QGIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCIsImhhcHAiOiJvd2EifQ.ThtW57JNL21JSISss37Idkw3tq5nSF11lxf43wOK9aH2PuqnDvW5rVgJeLY6uYRTKRi3zUN5gxQ2hspvi-JL86V-TFmH4rRBm33YTeeJZKrm7-LD30cNYhG62uBl-9D6ysJf2kwiGrj1Po8KcYV1iAIXHE6zSHoOqjKnxZ8t3G7QjKYct9aFVd6L44yz1ikfkwfKp60H3S4q_szMB1zh0PZa3eu-hq6dpApvN8OEjpldJ-A9--sHOx5GVKp6e9frtaY-Diq-_WnHQpAQLrafYKH3lT00ADz_H5PSYNQOD68dq9zXoJh5X3jDH721tyCCb5RoYpWOyZ7pkAynhpwW3Q&X-OWA-CANARY=bdvoV5Aj--gAAAAAAAAAAOBCQ_omkdwYddJOqP1ukHQ7NkfosmF1FmvwwCNC_2w1gakFS92vpus.&owa=outlook.office365.com&scriptVer=20240607002.20&clientId=80B41ECF7F304B4283AE8BC02977A233&animation=true' }}
                />
                <Text variant="bodyMedium">   Somos um grupo unido pelo compromisso
                    de transformar vidas, nosso trabalho ajuda ao próximo,
                    buscando criar uma rede de soliariedade e suporte,
                    oferecendo esperança para aqueles que mais precisam</Text>
            </Card.Content>
        </Card>

        <Card style={{marginTop: 15}}>
            <Card.Content>
            <Text  style={{fontWeight:'bold', fontSize: 25, color: "#00003d"}}>Funcionamento</Text>
                <Card.Cover source={{ uri: 'https://attachments.office.net/owa/kamily.costa%40portalsesisp.org.br/service.svc/s/GetAttachmentThumbnail?id=AAMkAGZkYWFkZjEwLTE3NTgtNDkwNC1hNTNiLWRiYzQyYzA4MmE1YQBGAAAAAADYcovAusobTqlMsgmz7xf9BwBwcC6Dr2SDQbD2yTXEpg%2BdAAAAAAEMAABwcC6Dr2SDQbD2yTXEpg%2BdAAXUUZLZAAABEgAQAC6B3NcVW1lGlnf5gwLTmGc%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkU1RDJGMEY4REE5M0I2NzA5QzQzQTlFOEE2MTQzQzAzRDYyRjlBODAiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI1ZEx3LU5xVHRuQ2NRNm5vcGhROEE5WXZtb0EifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiMGQ4MzNhYzE5NWIwNDQwZGFiNzk2MGQzNzBiYmE2MTgiLCJpbl9jb3JwIjoidHJ1ZSIsInNpZ25pbl9zdGF0ZSI6Imttc2kiLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQGIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHVpZFwiOlwiMTE1Mzk3NzAyNTcxNzc5MjIzNlwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCIsXCJvaWRcIjpcImZlMTE2MzVjLTc0MDQtNDMzMy04MmRjLTljMTFiMTg2ZTM5ZVwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTUtMjEtMzI0MzUzODQ4Mi0yMzgwNjQwMTA3LTYzNDg0NjgtMTcyMjQwMThcIn0iLCJuYmYiOjE3MTg4ODc3NDIsImV4cCI6MTcxODg4ODA0MiwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQGIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QGIxMDUxYzRiLTNiOTQtNDFhYi05NDQxLWU3M2E3MjM0MmZkZCIsImhhcHAiOiJvd2EifQ.oO6Z_kdzr3xC-IHXz9K-1sQw6IPs0ZIieg6vAPEpJaml6tdCz-Es3rXFmXXVCfVwrF2w_tnEdBwa15rqmA8O-FCJVfsYr7oH4pFGShFHY7WPqxU0WnMnpW4I3FNKA_PMe--LVxoEFZcVUZeU0k6owD8QLBzljpwuAVzNSAmOVunD8fw-nLaJGj9iPzPt_0-PqOOVdgLgW6I8WDjIskrO_Es5Igv0k9phxaC_SwOI7luVPgO06FhjhhMiurJzdFa4GHrWvH9lYCh7mcWC14y5f3xoHFspZlKbnnS438AjLOwnJS3s6CKw5pyR0rgcG7Ynb3auc--5Wb9Eq8AgG2iCog&X-OWA-CANARY=bdvoV5Aj--gAAAAAAAAAAJC5itsnkdwY29wElUyioW_NiqJOhWY98AQLhre2dREocy7D6RwRYzE.&owa=outlook.office365.com&scriptVer=20240607002.20&clientId=80B41ECF7F304B4283AE8BC02977A233&animation=true' }}
                />
              
                <Text variant="bodyMedium">
                    A “União Sul” tem o objetivo de ajudar as pessoas que foram
                    afetadas com as enchentes do Rio Grande do Sul e perderam suas coisas
                </Text>
            </Card.Content>
        </Card>

        <Text style={{backgroundColor: "#aac5e3", textAlign:'center',fontWeight:'bold', fontSize: 22, margin: 20}}>“Ajudar o próximo é ganhar uma chance única de transformar a vida de outra pessoa!”</Text>

    </ScrollView>
);

export default MyComponent 
