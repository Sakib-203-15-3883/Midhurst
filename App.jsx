import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import React,{useContext,useEffect} from 'react';
import Colors from './assets/colors/theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppDrawerNavigator from "./Navigator/AppDrawerNavigator"
import OnboardingScreen from './src/AuthenticationScreens/OnboardingScreen';
import LoginScreen from './src/AuthenticationScreens/LoginScreen';
import RegisterScreen from './src/AuthenticationScreens/RegisterScreen';
import ForgotPassword from './src/AuthenticationScreens/ForgotPassword';
import ResetPassword from './src/AuthenticationScreens/ResetPassword';

import { AuthProvider } from './src/context/AuthContext';
import { AuthContext } from './src/context/AuthContext';

import DisplayInvoiceData from './Screens/DisplayInvoiceData';

import DisplayPdf from './Screens/DisplayPdf';
import { PdfProvider } from './src/context/PdfContext';
import SplashScreen from 'react-native-splash-screen';
const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    if (SplashScreen) {
      SplashScreen.hide();
    }
  }, []);
  return (
    <AuthProvider>
      <PdfProvider>
        <AppContent />
        </PdfProvider>
      </AuthProvider>
  );
};

const AppContent = () => {
  // const {theme} = useTheme();
  // const { loginInformation, splashLoading } = useContext(AuthContext);
  const {loginInformation, splashLoading, isLoggedIn} = useContext(AuthContext);

  useEffect(() => {
    isLoggedIn(); // Check if the user is logged in
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <NavigationContainer >
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {loginInformation?.data ? (
              <Stack.Screen
                name=" AppDrawerNavigator"
                component={AppDrawerNavigator}
              />
            ) : (
              <>
                <Stack.Screen
                  name="OnboardingScreen"
                  component={OnboardingScreen}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="Register"
                  component={RegisterScreen}
                  options={{headerShown: false}}
                />

                <Stack.Screen
                  name="ForgotPassword"
                  component={ForgotPassword}
                  options={{headerShown: false}}
                />

                <Stack.Screen
                  name="ResetPassword"
                  component={ResetPassword}
                  options={{headerShown: false}}
                />
              </>
            )}

            {/* <Stack.Screen
                name=" AppDrawerNavigator"
                component={AppDrawerNavigator}
              /> */}

            <Stack.Screen name="DisplayInvoiceData" component={DisplayInvoiceData} />
              <Stack.Screen name="DisplayPdf" component={DisplayPdf} />
             
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
