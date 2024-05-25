import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CartContext';
import ordersData from '../data/orders.json';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const placeOrder = () => {
    const order = {
      items: cartItems,
      totalPrice: totalPrice,
      orderNumber: ordersData.length + 1
    };
    ordersData.push(order);
    setOrderPlaced(true);
  };

  const OrderSuccess = ({ orderNumber }) => (
    <View style={styles.successContainer}>
      <Text style={styles.successText}>
        Twoje zamówienie zostało złożone.
      </Text>
      <Text style={styles.successText}>
        Numer zamówienia: {orderNumber}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ?
        <Text style={styles.emptyCart}>Koszyk jest pusty</Text> :
        <View>
          <Text style={styles.title}>Koszyk</Text>
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.product}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
          )}
          />
          <Text style={styles.price}>{totalPrice} PLN</Text>
          <TouchableOpacity onPress={placeOrder}>
            <Text>Złóż zamówienie {orderPlaced ? 'HAH' : 'hhh'}</Text>
          </TouchableOpacity>
          
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  product: {
    backgroundColor: '#333',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    color: '#fff',
    fontSize: 16,
  },
  emptyCart: {
    color: '#fff',
    fontSize: 26
  }
});

export default CartPage;
