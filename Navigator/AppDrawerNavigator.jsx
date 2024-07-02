import React,{useContext,useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from '../src/context/AuthContext';
import Menu from 'react-native-vector-icons/Feather';
import Home from './DrawerScreens/Home';
import ProfileScreen from './DrawerScreens/ProfileScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import PrivacyPolicyScreen from './DrawerScreens/PrivacyPolicyScreen';
import TermsConditionsScreen from './DrawerScreens/TermsConditionsScreen';
import HistoryScreen from './DrawerScreens/HistoryScreen';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Colors from '../assets/colors/theme';

const Drawer = createDrawerNavigator();
const logoutIcon = require('../assets/icons/logout_icon.png');
const headerImage = require('../assets/icons/DrawerHeaderImage.png');
const CompanyLogo = require('../assets/icons/Logo.png');

const { height: screenHeight } = Dimensions.get('window');

const CustomDrawerContent = (props) => {
  const { loginInformation, logout, isLoading } = useContext(AuthContext);
  const user = loginInformation?.data?.user;
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContainer}>
        <Image source={headerImage} style={styles.headerImage} />
        <View style={styles.horizontalLine} />
      </View>
      <DrawerItemList {...props} />
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={logout}
        >
          <Text style={styles.logoutText} >Log Out</Text>
          <Image source={logoutIcon} style={styles.logoutIcon} />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomHeader = ({ navigation, route }) => {
  const currentDate = new Date();
  const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  // Conditionally render header based on route name
  if (route.name === 'Home') {
    return (
      <View style={[styles.customHeader, { height: screenHeight * 0.1 }]}>
        <Image source={CompanyLogo} style={styles.companyLogo} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.dayName}>{dayName}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={styles.menuButton}
        >
          <Menu name="menu" size={26} color={Colors.White.Normal40} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return null; // Hide header for other screens
  }
};

const DrawerNavigator = () => {
  
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation, route }) => ({
        header: () => <CustomHeader navigation={navigation} route={route} />,
        drawerLabelStyle: {
          fontFamily: 'Raleway-Regular',
          fontSize: 16,
          color: Colors.White.Darker100,
          lineHeight: 18.78,
          fontWeight: '400',
        },
      })}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicyScreen} />
      <Drawer.Screen
        name="Terms & Conditions"
        component={TermsConditionsScreen}
      />
      <Drawer.Screen name="History" component={HistoryScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    paddingTop: 49,
    paddingLeft: 9,
  },
  headerImage: {
    width: 210,
    height: 51,
  },
  horizontalLine: {
    marginTop: 20,
    width: '100%',
    height: 1,
    backgroundColor: '#0000000F',
    marginBottom: '5%',
  },
  logoutContainer: {
    marginTop: '75%',
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  logoutIcon: {
    width: 19,
    height: 20,
    marginLeft: '5%',
    marginTop: '2%',
  },
  logoutText: {
    color: Colors.White.Darker100,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 18.78,
    fontFamily: 'Raleway-Regular',
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: Colors.White.Normal40,
  },
  companyLogo: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  menuButton: {
    backgroundColor: Colors.Green.Normal40,
    padding: 10,
    borderRadius: 50,
  },
  headerTextContainer: {
    alignItems: 'center',
  },
  dayName: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.Black.Darker100,
    fontFamily: 'Raleway-Regular',
    marginBottom: 4,
    lineHeight: 18.78,
  },
  date: {
    fontSize: 14,
    color: Colors.White.DarkActive90,
    fontFamily: 'Raleway-Regular',
    lineHeight: 16.44,
    fontWeight: '400',
  },
});

export default DrawerNavigator;
