import React, {useContext, useState, useEffect} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
// import {useTheme} from '@react-navigation/native';

// import {AuthContext} from '../context/AuthContext';
import { AuthContext } from '../context/AuthContext';
import Colors from '../../assets/colors/theme';
const RegisterScreen = ({navigation}) => {
  // const theme = useTheme();

  const [first_name, setFirst_name] = useState(null);
  const [last_name, setLast_name] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [address, setAddress] = useState(null);

  const {
    isLoading,
    register,
    registerDetails,
    registerError,
    clearRegisterError,
    clearRegisterDetails,
  } = useContext(AuthContext);

  // Reset registerError and registerDetails when component mounts
  useEffect(() => {
    clearRegisterError();
    clearRegisterDetails();
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  // Reset registerError, registerDetails, and input fields when component mounts or registerDetails changes
  useEffect(() => {
    clearRegisterError(null);
    clearRegisterError({});
    setFirst_name('');
    setLast_name('');
    setUsername('');
    setEmail('');
    setPassword('');
    setAddress('');
  }, [registerDetails]); // This effect will run whenever registerDetails changes

  // const isValidEmail = (email) => {
  //   // Regular expression to match email ending with diu.edu.bd
  //   const regex = /@diu\.edu\.bd$/;
  //   return regex.test(email);
  // };

  const handleRegister = () => {
    // if (!isValidEmail(email)) {
    //   setErrorMessage("Please use a DIU email address ending with 'diu.edu.bd'");
    //   return;
    // }
    // If email is valid, proceed with registration
    register(first_name, last_name, username, email, password, address);
  };

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
        {/* Display register error messages */}
        {registerError && (
          <>
            {registerError.username && (
              <Text style={[styles.errorMessage, {color: 'red'}]}>
                {registerError.username}
              </Text>
            )}
            {registerError.email && (
              <Text style={[styles.errorMessage, {color: 'red'}]}>
                {registerError.email}
              </Text>
            )}
          </>
        )}

        {/* Display success or other messages */}
        {registerDetails.message && (
          <Text style={[styles.errorMessage, {color: 'green'}]}>
            {registerDetails.message}
          </Text>
        )}

        <ScrollView>
          <TextInput
            style={[
              styles.input,
              styles.text,
              {color: Colors.Black.Normal40, borderColor: Colors.Black.Normal40},
            ]}
            value={first_name}
            placeholder="Enter First Name"
            placeholderTextColor={Colors.Black.Normal40}
            onChangeText={text => setFirst_name(text)}
          />

          <TextInput
            style={[
              styles.input,
              styles.text,
              {color: Colors.Black.Normal40, borderColor: Colors.Black.Normal40},
            ]}
            value={last_name}
            placeholder="Enter Last Name"
            onChangeText={text => setLast_name(text)}
            placeholderTextColor={Colors.Black.Normal40}
          />

          <TextInput
            style={[
              styles.input,
              styles.text,
              {color: Colors.Black.Normal40, borderColor: Colors.Black.Normal40},
            ]}
            value={username}
            placeholder="Enter User Name"
            onChangeText={text => setUsername(text)}
            placeholderTextColor={Colors.Black.Normal40}
          />

          <TextInput
            style={[
              styles.input,
              styles.text,
              {color: Colors.Black.Normal40, borderColor: Colors.Black.Normal40},
            ]}
            value={email}
            placeholder="Enter Email"
            placeholderTextColor={Colors.Black.Normal40}
            onChangeText={text => setEmail(text)}
            
          />

          <TextInput
            style={[
              styles.input,
              styles.text,
              {color: Colors.Black.Normal40, borderColor:Colors.Black.Normal40},
            ]}
            value={password}
            placeholder="Enter Password"
            placeholderTextColor={Colors.Black.Normal40}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />

          <TextInput
            style={[
              styles.input,
              styles.text,
              {color: Colors.Black.Normal40, borderColor: Colors.Black.Normal40},
            ]}
            value={address}
            placeholder="Enter Address"
            placeholderTextColor={Colors.Black.Normal40}
            onChangeText={text => setAddress(text)}
            
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={[{color: Colors.Black.Normal40, fontSize: 17}]}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginVertical: '10%',
  },

  header: {
    marginBottom: 20,
    fontSize: 17,
    fontStyle: 'italic',
  },

  errorMessage: {
    marginBottom: 20,
    fontSize: 17,
    fontStyle: 'italic',
  },
  text: {
    // color: 'white',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    // borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'red',
    fontSize: 17,
  },
  button: {
    backgroundColor: '#007bff', // Background color
    paddingVertical: 12, // Vertical padding
    paddingHorizontal: 24, // Horizontal padding
    borderRadius: 15, // Border radius
    shadowColor: '#000', // Shadow color
    shadowOpacity: 0.3, // Shadow opacity
    shadowOffset: {width: 2, height: 2}, // Shadow offset
    shadowRadius: 2, // Shadow radius
    elevation: 3, // Elevation (for Android)
  },
  buttonText: {
    color: '#FFF', // Text color
    fontSize: 16, // Font size
    fontWeight: 'bold', // Font weight
    textAlign: 'center', // Text alignment
  },
});

export default RegisterScreen;

