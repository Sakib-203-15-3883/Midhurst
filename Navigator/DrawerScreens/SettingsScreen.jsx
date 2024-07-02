import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../assets/colors/theme';
import Icon from 'react-native-vector-icons/Ionicons'; // Adjust the icon name and package based on your preference

const SettingsScreen = ({ navigation }) => {
  // Function to navigate to ChangePasswordScreen
  const navigateToChangePassword = () => {
    // Replace with your navigation logic
    // navigation.navigate('ChangePasswordScreen');
  };

  // Function to navigate to DeleteAccountScreen
  const navigateToDeleteAccount = () => {
    // Replace with your navigation logic
    // navigation.navigate('DeleteAccountScreen');
  };

  // Function to handle back button press
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={Colors.Black.Normal40} />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>
      <TouchableOpacity style={styles.settingItem} onPress={navigateToChangePassword}>
        <Icon name="lock-closed" size={24} color={Colors.Black.Normal40} style={styles.icon} />
        <Text style={styles.settingText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={navigateToDeleteAccount}>
        <Icon name="trash-bin" size={24} color={Colors.Black.Normal40} style={styles.icon} />
        <Text style={styles.settingText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginLeft: 10,
    color: Colors.Black.Normal40,
  },
  backButton: {
    padding: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  settingText: {
    fontSize: 18,
    color: Colors.Black.Normal40,
  },
});

export default SettingsScreen;
