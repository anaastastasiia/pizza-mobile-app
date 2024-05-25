import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductScreen = ({ route }) => {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  price: {
    color: '#fff',
    fontSize: 20,
    margin: 10,
  },
  image: {
    width: '80%',
    height: 300,
    borderRadius: 10,
  },
});

export default ProductScreen;
