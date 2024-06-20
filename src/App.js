import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Icon } from 'react-native-paper';

import SobreScreen from './views/Sobre'
import ProdutoScreen from './views/Produtos'
import PedidosScreen from './views/Pedidos'
import CarrinhoScreen from './views/Carrinho'
import PagamentoScreen from './views/Pagamento'


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Sobre' options={{}} >
        <Tab.Screen name="Sobre" component={SobreScreen}
          options={{
            tabBarIcon: () => (
              <Icon
                source="camera"
                size={20}
              />
            ),
            title: "União Sul",
            headerStyle: {
              backgroundColor: "#aac5e3",
            }
          }} />

        <Tab.Screen name="Produtos" component={ProdutoScreen}
          options={{
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons
            //     name="shopping-outline" color={color} size={size} />
            // ),
            headerStyle: {
              backgroundColor: "#aac5e3",
            }
          }} />


        <Tab.Screen name="Carrinho" component={CarrinhoScreen}
          options={{
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons
            //     name="home" color={color} size={size} />
            // ),

            headerStyle: {
              backgroundColor: "#aac5e3",
            }
          }} />

        <Tab.Screen name="Pedidos" component={PedidosScreen}
          options={{
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons
            //     name="cart-plus" color={color} size={size} />
            // ),

            headerStyle: {
              backgroundColor: "#aac5e3",
            }
          }} />
        <Tab.Screen name="Pagamento" component={PagamentoScreen}
          options={{
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons
            //     name="cart-plus" color={color} size={size} />
            // ),

            headerStyle: {
              backgroundColor: "#aac5e3",
            }
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
