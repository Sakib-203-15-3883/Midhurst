import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,ScrollView} from 'react-native';
import Colors from '../../assets/colors/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Edit from 'react-native-vector-icons/AntDesign';

const ProfileScreen = ({navigation}) => {
  // Dummy user data
  const userData = {
    name: 'Sakib',
    email: 'Sakib@example.com',
    profileImage: require('../../assets/icons/image.png'),
    phoneNumber: '+88 01234',
    gender: 'Male',
    address: 'Mirpur10,Dhaka,Bangladesh',
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      

      <View style={styles.backButton}>
        <TouchableOpacity onPress={goBack}>
          <Icon
            name="arrow-back"
            size={24}
            color={Colors.Black.Normal40}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.backText}>My Profile</Text>
        <Edit
          name="edit"
          size={24}
          color={Colors.Black.Normal40}
          style={styles.editIcon}
        />
      </View>

      {/* Top part: Profile image, username, and email */}
      <View style={styles.topContainer}>
        <Image source={userData.profileImage} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userData.name}</Text>
          <Text style={styles.email}>{userData.email}</Text>
        </View>
      </View>

      {/* Middle part: Personal information cards */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Personal Information</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Name:</Text>
          <Text style={styles.infoValue}>{userData.name}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Phone Number:</Text>
          <Text style={styles.infoValue}>{userData.phoneNumber}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>{userData.email}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Gender:</Text>
          <Text style={styles.infoValue}>{userData.gender}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Address:</Text>
          <Text style={styles.infoValue}>{userData.address}</Text>
        </View>
      </View>

     
      {/* Horizontal line at the bottom */}
      <View style={styles.line} />

      <Text style={{color:"black"}}>currently i don't have API for users data , so I use hard coded dummy info</Text>


      
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
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    padding: 10,
    gap: 70,
  },
  backText: {
    fontSize: 16,
    color: Colors.Black.Normal40,
    marginLeft: 5,
  },
  backIcon: {
    marginRight: 5,
  },
  editIcon: {
    marginLeft: 'auto', // This will push the edit icon to the rightmost side of the button
  },
  topContainer: {
    flexDirection: 'column', // Changed to column to stack items vertically
    alignItems: 'center', // Center items horizontally
    marginBottom: 20,
    marginTop: '20%',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfo: {
    marginTop: 10, // Added margin to separate profile image from text
    alignItems: 'center', // Center text horizontally
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.Black.Normal40,
  },
  email: {
    fontSize: 16,
    color: Colors.Black.Normal40,
  },
  card: {
    backgroundColor: Colors.White.Normal100,
    borderRadius: 2,
    padding: 15,
    elevation: 3,
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.Black.Normal40,
  },
  infoItem: {
    flexDirection: 'column', // Changed to column to stack items vertically
    marginBottom: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: Colors.Black.Normal40,
  },
  infoValue: {
    color: Colors.Black.Normal40,
  },
  line: {
    borderBottomColor: Colors.Black.Normal40,
    borderBottomWidth: 5,
    marginTop: '15%',
    marginBottom:"10%",
    marginHorizontal: '30%',
  },
});

export default ProfileScreen;
