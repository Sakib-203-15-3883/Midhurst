import React, { useContext } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { useTheme } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
// import { AuthContext } from '../context/AuthContext';
import { AuthContext } from '../context/AuthContext';
import Colors from '../../assets/colors/theme';
const ForgotPassword = ({ navigation }) => {
  const {
    forgetPassword,
    forgotPassWordResponse,
    forgotPassWordError,
    isLoading,
    clearForgotPassWordResponse,
    clearForgotPassWordError,
  } = useContext(AuthContext);

  // const theme = useTheme();

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Email is required'),
          })}
          onSubmit={(values, actions) => {
            forgetPassword(values.email);
            actions.setSubmitting(false);
          }}>
          {formikProps => (
            <React.Fragment>
              <TextInput
                style={[
                  styles.input,
                  styles.text,
                  { color: Colors.Black.Normal40, borderColor: Colors.Black.Normal40 },
                ]}
                value={formikProps.values.email}
                placeholder="Enter Your Registered Email"
                placeholderTextColor={Colors.Black.Normal40}
                onChangeText={formikProps.handleChange('email')}
                onBlur={formikProps.handleBlur('email')}
              />
              {formikProps.errors.email && formikProps.touched.email && (
                <Text style={styles.error}>{formikProps.errors.email}</Text>
              )}
              <TouchableOpacity
                onPress={formikProps.handleSubmit}
                style={styles.button}
                disabled={formikProps.isSubmitting}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </React.Fragment>
          )}
        </Formik>

        {forgotPassWordResponse.message && (
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
            {forgotPassWordResponse.message}
          </Text>
        )}

        {forgotPassWordError && (
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
            {forgotPassWordError}
          </Text>
        )}

        {forgotPassWordResponse.message && (
          <View style={styles.bottomInformation}>
            <TouchableOpacity
              style={[styles.nextButton, { borderColor: Colors.Black.Normal40 }]}
              onPress={() => navigation.navigate('ResetPassword')}>
              <Text style={[styles.link]}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
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
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'red',
    fontSize: 17,
    borderRadius: 1,
  },
  bottomInformation: {
    flexDirection: 'row',
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row-reverse',
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
    marginTop: '5%',
  },
  nextButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

