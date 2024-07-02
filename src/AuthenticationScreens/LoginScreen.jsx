
import React, { useContext } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet,ScrollView } from 'react-native';
// import { useTheme } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
// import { AuthContext } from '../context/AuthContext';
import { AuthContext } from '../context/AuthContext';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Colors from '../../assets/colors/theme';

const LoginScreen = ({ navigation }) => {
  // const theme = useTheme();
  const { isLoading, login } = useContext(AuthContext);

  // Define Yup validation schema
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values) => login(values.email, values.password)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.wrapper}>
            {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

            <ScrollView>
            <TextInput
              style={[
                styles.input,
                styles.text,
                { color: Colors.Black.Normal40, borderColor: Colors.Black.Normal40 },
              ]}
              value={values.email}
              placeholder="Enter Your Email"
              placeholderTextColor={Colors.Black.Normal40}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}
            <TextInput
              style={[
                styles.input,
                styles.text,
                { color: Colors.Black.Normal40, borderColor: Colors.Black.Normal40 },
              ]}
              value={values.password}
              placeholder="Enter password"
              placeholderTextColor={Colors.Black.Normal40}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry
            />

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}
              style={[
                styles.buttonForgotPassword,
                { borderWidth: 1, borderColor: Colors.Black.Normal40, borderRadius: 10 },
              ]}
            >
              <Text style={[styles.buttonText, { color: Colors.Black.Normal40 }]}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.bottomInformation}>
              <Text style={[styles.text, { color: Colors.Black.Normal40 }]}>Don't have an account?{' '}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>Register</Text>
              </TouchableOpacity>
            </View>
            </ScrollView>
          </View>
        )}
      </Formik>
    </View>
  );
};

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

export default LoginScreen;
