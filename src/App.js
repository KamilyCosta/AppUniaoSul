import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import sobreScreen from './views/Sobre'
import ProdutoScreen from './views/Produtos'
import PedidosScreen from './views/Pedidos'
import CarrinhoScreen from './views/Carrinho'
import { PaperProvider } from "react-native-paper";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
 <Tab.Navigator initialRouteName='Sobre'>
        <Tab.Screen name="Sobre" component={sobreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons 
          name="home" color={color} size={size}/>
        ),
        }}
        />
        <Tab.Screen name="Produto" component={ProdutoScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons 
          name="shopping-outline" color={color} size={size}/>
        ),
        }}
        
        />
        <Tab.Screen name="Pedidos" component={PedidosScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons 
          name="package-variant-closed" color={color} size={size}/>
        ),
        }}
        />
        <Tab.Screen name="Carrinho" component={CarrinhoScreen} 
         options={{
          tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons 
          name="cart-plus" color={color} size={size}/>
        ),
        }}
        />
      </Tab.Navigator>



     
       
    </NavigationContainer>
  );
}

export default App;
