import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Image, StyleSheet, ScrollView  } from 'react-native';

const ProductPage = ({ route }) => {
  const { t } = useTranslation();
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>
        {t('products.ingredients')}
        {product.description}{'\n'}
        {t('products.size')}
        {product.size}
      </Text>
      <Text style={styles.price}>{product.price}</Text>
    </ScrollView>
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
  description: {
     color: '#aaa',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default ProductPage;
