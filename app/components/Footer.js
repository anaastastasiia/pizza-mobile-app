import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <View style={styles.footer}>
      <View style={styles.info}>
        <Text style={styles.text}>{t('footer.address')}</Text>
        <Text style={styles.text}>{t('footer.openingHours')}</Text>
      </View>
      <View style={styles.flags}>
        <TouchableOpacity onPress={() => changeLanguage('en')}>
          <Image source={require('../../assets/flag_en.png')} style={styles.flag} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('pl')}>
          <Image source={require('../../assets/flag_pl.png')} style={styles.flag} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#333',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  info: {
    flex: 1,
  },
  flags: {
    flexDirection: 'row',
  },
  flag: {
    width: 30,
    height: 20,
    marginTop: 5,
    marginLeft: 10,
  },
  text: {
    color: '#fff', 
  },
});

export default Footer;
