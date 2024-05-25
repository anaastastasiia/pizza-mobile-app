import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, ScrollView } from 'react-native';
import { CartContext } from '../context/CartContext';
import { products } from '../data/products';

const HomePage = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        {products.map(item => (
          <View key={item.id} style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Button title="Dodaj" onPress={() => addToCart(item)} />
              <TouchableOpacity onPress={() => navigation.navigate('Product', { product: item })}>
                <Text style={styles.details}>Szczegóły</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 10,
  },
  product: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  details: {
    color: '#1E90FF',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default HomePage;
