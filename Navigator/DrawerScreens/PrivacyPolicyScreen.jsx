import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../assets/colors/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const PrivacyPolicyScreen = ({ navigation }) => {
  
  const goBack = () => {
    navigation.goBack();
  };

 
  const privacyContents = [
    `
      When you use our App, we collect and store your personal information which is provided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our website to make your experience safer and easier. More importantly, while doing so, we collect personal information from you that we consider necessary for achieving this purpose.
    `,
    `
      Below are some of the ways in which we collect and store your information:
    `,
    `
      We receive and store any information you enter on our website or give us in any other way. We use the information that you provide for such purposes as responding to your requests, customizing future shopping for you, improving our stores, and communicating with you. We also store certain types of information whenever you interact with us. For example, like many websites, we use "cookies," and we obtain certain types of information when your web browser accesses Chaldal.com or advertisements and other content served by or on behalf of Chaldal.com on other websites.
    `,
    `
      To help us make emails more useful and interesting, we often receive a confirmation when you open an email from Chaldal if your computer supports such capabilities.
    `,
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={Colors.Black.Normal40} />
        </TouchableOpacity>
        <Text style={styles.title}>Privacy Policy</Text>
      </View>
      <View style={styles.content}>
        {privacyContents.map((content, index) => (
          <View key={index}>
            <Text style={styles.textContent}>{content}</Text>
          </View>
        ))}
        <View style={styles.line} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.White.Normal40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginLeft: 10,
    color: Colors.Black.Normal40,
  },
  backButton: {
    padding: 10,
  },
  content: {
    flex: 1,
    marginBottom: 20,
  },
  textContent: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.Black.Normal40,
    marginBottom: 10,
  },
  line: {
    borderBottomColor: Colors.Black.Normal40,
    borderBottomWidth: 5,
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: '30%',
  },
});

export default PrivacyPolicyScreen;
