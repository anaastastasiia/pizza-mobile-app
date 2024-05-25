import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <View style={styles.footer}>
      <Text>{t('footer.address')}</Text>
      <Text>{t('footer.openingHours')}</Text>
      <TouchableOpacity onPress={() => changeLanguage('en')}>
        <Text style={styles.language}>{t('languageSwitch')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeLanguage('pl')}>
        <Text style={styles.language}>{t('languageSwitch')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#ddd',
    padding: 10,
    alignItems: 'center'
  },
  language: {
    marginTop: 5,
    fontWeight: 'bold',
    color: 'blue'
  }
});

export default Footer;
