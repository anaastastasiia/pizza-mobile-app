import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './app/pages/HomePage';
import ProductPage from './app/pages/ProductPage';
import MapPage from './app/pages/MapPage';
import CartPage from './app/pages/CartPage';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import { CartProvider } from './app/context/CartContext';
import './i18n'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#333' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            header: () => <Header />,
          }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Product" component={ProductPage} />
          <Stack.Screen name="Map" component={MapPage} />
          <Stack.Screen name="Cart" component={CartPage} />
        </Stack.Navigator>
      </NavigationContainer>
      <Footer />
    </CartProvider>
  );
}
