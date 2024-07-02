import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../assets/colors/theme';


const OnboardingScreen = ({ navigation }) => {
  // const theme = useTheme();
  return (

    <View style={[styles.container,{backgroundColor:Colors.White.Normal40}]}>
      
      
      <View style={styles.dotContainer}>
          <View style={[styles.dot,{backgroundColor:Colors.White.Normal40}]} />
          <View style={[styles.dot,{backgroundColor:Colors.White.Normal40}]} />
          <View style={[styles.dot,{backgroundColor:Colors.White.Normal40}]} />
        </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  heroImage: {
    width: '100%',
    height: "33%",
    marginTop:"10%",
    marginBottom:"10%",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    marginBottom:"10%",
    
    
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:"5%",
    
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  registerButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  dotContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    marginHorizontal: 5,
  },
});

export default OnboardingScreen;
