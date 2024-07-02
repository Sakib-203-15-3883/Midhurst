import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // register state 
  const [registerDetails, setRegisterDetails] = useState({});
  const [registerError, setRegisterError] = useState(null);
  // login state
  const [loginInformation, setLoginInformation] = useState({});
  const [forgotPassWordResponse, setForgotPassWordResponse] = useState({});
  const [forgotPassWordError, setForgotPassWordError] = useState("");


  const [resetPassWordResponse, setResetPassWordResponse] = useState({});
  const [resetPassWordError, setResetPassWordError] = useState("");


  //Else
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const register = (first_name, last_name, username, email, password, address) => {
    setIsLoading(true);

    axios
      .post('https://horekrokom.pythonanywhere.com/api/register/', {
        first_name,
        last_name,
        username,
        email,
        password,
        address
      })
      .then(res => {
        let details = res.data;
        setRegisterDetails(details);
        // AsyncStorage.setItem('registerDetails', JSON.stringify(registerDetails));
        setIsLoading(false);

        // Clear registerError state upon successful registration
        setRegisterError(null);
        console.log(registerDetails);
      })
      .catch(error => {
        if (error.response) {
          const { data } = error.response;
          // Check if both username and email exist
          if (data.username && data.email) {
            setRegisterError({ username: data.username[0], email: data.email[0] });
          } else if (data.username) {
            // Username already exists
            setRegisterError({ username: data.username[0] });
          } else if (data.email) {
            // Email already exists
            setRegisterError({ email: data.email[0] });
          } else {
            // Handle other error cases
            console.log('Unhandled error:', data);
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(`register error ${error}`);
        setIsLoading(false);
      });
  };


  // Define setter functions for registerError and registerDetails
  const clearRegisterError = () => {
    setRegisterError(null);
  };

  const clearRegisterDetails = () => {
    setRegisterDetails({});
  };

  const clearForgotPassWordResponse = () => {

    setForgotPassWordResponse({});


  }

  const clearForgotPassWordError=()=>{

    setForgotPassWordError("");
  }



  /////////      Login              ///////////////

  const login = (email, password) => {
    setIsLoading(true);

    axios
      .post('https://horekrokom.pythonanywhere.com/api/login/', {
        email,
        password,
      })
      .then(res => {
        const loginData = res.data;
        setLoginInformation(loginData); // Store user data in the state
        AsyncStorage.setItem('loginInformation', JSON.stringify(loginData)); // Store login information directly
        setIsLoading(false);
      })
      .catch(e => {

        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };


  // console.log(loginInformation["message"]);

  // console.log(loginInformation["data"]["user"]["username"]);


  /////////     Forgot passWord            ///////////////

  const forgetPassword = (email) => {
    setIsLoading(true);

    axios
      .post('https://horekrokom.pythonanywhere.com/api/forget-password/', {
        email,

      })
      .then(res => {
        const forgotResponse = res.data;
        setForgotPassWordResponse(forgotResponse); // Store forgotResponse data in the state
        // AsyncStorage.setItem('loginInformation', JSON.stringify(loginData)); // Store login information directly
        setIsLoading(false);
      })
      .catch(error => {

       // Check if error.response exists before accessing its properties
      if (error.response && error.response.data) {
        // Extract the error message from the error response and store it in the state
        const errorMessage = error.response.data.error;
        console.log( errorMessage);
        setForgotPassWordError(errorMessage);
      } else {
        console.log('Error:', error.message); // Log other types of errors
      }
      setIsLoading(false);
    });
  };



/////////     Reset  passWord            ///////////////

const resetPassword = (email, otp,new_password) => {
  setIsLoading(true);

  axios
    .post('https://horekrokom.pythonanywhere.com/api/reset-password/', {
      email,
       otp,
       new_password

    })
    .then(res => {
      const resetPasswordResponse = res.data;

      setResetPassWordResponse(resetPasswordResponse); // Store forgotResponse data in the state
      // AsyncStorage.setItem('loginInformation', JSON.stringify(loginData)); // Store login information directly

      console.log(resetPasswordResponse);
      setIsLoading(false);
    })
    .catch(error => {

     // Check if error.response exists before accessing its properties
    if (error.response && error.response.data) {
      // Extract the error message from the error response and store it in the state
      const errorMessage = error.response.data.error;
      console.log( errorMessage);
      setResetPassWordError(errorMessage);
    } else {
      console.log('Error:', error.message); // Log other types of errors
    }
    setIsLoading(false);
  });
};



  /////////     logOut          ///////////////
  const logout = () => {
    setIsLoading(true);

    // Clear login information from AsyncStorage
    AsyncStorage.removeItem('loginInformation')
      .then(() => {
        // Clear loginInformation state
        setLoginInformation({});
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Error while logging out:', error);
        setIsLoading(false);
      });

  };



  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let loginInformation = await AsyncStorage.getItem('loginInformation');
      loginInformation = JSON.parse(loginInformation);

      if (loginInformation) {
        setLoginInformation(loginInformation);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider

      value={{
        isLoading,
        loginInformation,
        forgotPassWordResponse,
        forgotPassWordError,
        resetPassWordResponse,
        resetPassWordError,
        splashLoading,
        registerDetails, // Pass registerDetails as a value in the context

        registerError,
        isLoggedIn,



        register,
        login,
        forgetPassword,
        resetPassword,
        logout,

        clearRegisterError, // Pass the clearRegisterError function in the context
        clearRegisterDetails, // Pass the clearRegisterDetails function in the context
        clearForgotPassWordResponse,
        clearForgotPassWordError,
       

      }}>

      {children}

    </AuthContext.Provider>
  );
};
