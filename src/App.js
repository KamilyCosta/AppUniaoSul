import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Icon } from 'react-native-paper';

import SobreScreen from './views/Sobre'
import ProdutoScreen from './views/Produtos'
import PedidosScreen from './views/Pedidos'
import CarrinhoScreen from './views/Carrinho'
import PagamentoScreen from './views/Pagamento'

import { ScrollView } from 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function Home() {
  return (
        <Tab.Navigator initialRouteName='Sobre' options={{}} >
          <Tab.Screen name="Sobre" component={SobreScreen}
            options={{
              tabBarIcon: () => (
                <Icon
                  source="home"
                  size={30}
                />
              ),
              title: "União Sul",
              headerStyle: {
                backgroundColor: "#aac5e3",
              }
            }} />

          <Tab.Screen name="Produtos" component={ProdutoScreen}
            options={{
              tabBarIcon: () => (
                <Icon
                  source="shopping-outline"
                  size={30}
                />
              ),

              headerStyle: {
                backgroundColor: "#aac5e3",
              }
            }} />

          <Tab.Screen name="Carrinho" component={CarrinhoScreen}
            options={{
              tabBarIcon: () => (
                <Icon
                  source="cart-plus"
                  size={30}
                />
              ),

              headerStyle: {
                backgroundColor: "#aac5e3",
              }
            }} />


          <Tab.Screen name="Pedidos" component={PedidosScreen}
            options={{
              tabBarIcon: () => (
                <Icon
                  source="package-variant-closed"
                  size={30}
                />
              ),

              headerStyle: {
                backgroundColor: "#aac5e3",
              }
            }} />


        </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Pagamento"
          component={PagamentoScreen}
          options={{ title: "Pagamento" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;