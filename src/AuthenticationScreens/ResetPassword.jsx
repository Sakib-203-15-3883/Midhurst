import React, { useContext, useState, useEffect } from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
// import { useTheme } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../context/AuthContext';
import Colors from '../../assets/colors/theme';
const ResetPassword = ({ navigation }) => {

  // const theme = useTheme();

  const [email, setEmail] = useState(null);
  const [otp, setOtp] = useState(null);
  const [new_password, setNew_password] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const { isLoading, resetPassword,resetPassWordResponse, resetPassWordError  } = useContext(AuthContext);

  const response = resetPassWordResponse;
  const error = resetPassWordError;

  // const isValidEmail = (email) => {
  //   // Regular expression to match email ending with diu.edu.bd
  //   const regex = /@diu\.edu\.bd$/;
  //   return regex.test(email);
  // };

  const handleResetPassword = () => {
    // if (!isValidEmail(email)) {
    //   setErrorMessage("Please use a DIU email address ending with 'diu.edu.bd'");
    //   return;
    // }
    // If email is valid, proceed with login
    resetPassword(email, otp,new_password);
  };



  return (
    <View style={styles.container}>
      {/* <Spinner visible={isLoading} /> */}


      <View style={styles.wrapper}>



      <View>
  {response.message ? (
    <Text
      style={[
        {
          color: Colors.Black.Normal40,
          marginBottom: '10%',
          marginHorizontal: ' 5%',
          fontSize: 20,
          fontStyle: 'italic',
        },
      ]}>
      {response.message}
    </Text>
  ) : (
    error && (
      <Text
        style={[
          {
            marginBottom: '10%',
            marginHorizontal: ' 5%',
            fontSize: 20,
            fontStyle: 'italic',
            color: 'red',
          },
        ]}>
        {error}
      </Text>
    )
  )}
</View>





       

        <TextInput
          style={[
            styles.input,
            styles.text,
            { color: Colors.Black.Normal40, borderColor: Colors.Black.Normal40},
          ]}
          value={email}
          placeholder="Enter Your DIU  Email"
          placeholderTextColor={Colors.Black.Normal40}
          onChangeText={text => setEmail(text)}
        />


        <TextInput
          style={[
            styles.input,
            styles.text,
            { color: Colors.Black.Normal40, borderColor: Colors.Black.Normal40},
          ]}
          value={otp}
          placeholder="Enter OTP"
          placeholderTextColor={Colors.Black.Normal40}
          onChangeText={text => setOtp(text)}
          secureTextEntry
        />

<TextInput
          style={[
            styles.input,
            styles.text,
            { color: Colors.Black.Normal40, borderColor: Colors.Black.Normal40 },
          ]}
          value={new_password}
          placeholder="Enter New Password"
          placeholderTextColor={Colors.Black.Normal40}
          onChangeText={text => setNew_password(text)}
          secureTextEntry
        />

      

        <TouchableOpacity onPress={handleResetPassword} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 20,
    fontSize: 20,
    fontStyle: 'italic',
  },
  text: {
    // color: 'white',
    fontSize: 17,
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
  bottomInformation: {
    flexDirection: 'row',
    marginTop: 30,
  },

  buttonForgotPassword: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: '5%',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    elevation: 3,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ResetPassword;


