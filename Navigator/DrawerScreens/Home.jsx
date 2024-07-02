import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../assets/colors/theme';

const Home = () => {
  const [text, setText] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentAge, setStudentAge] = useState('');
  const [studentGrade, setStudentGrade] = useState('');
  const [studentSchool, setStudentSchool] = useState('');
  const [studentAddress, setStudentAddress] = useState('');

  const navigation = useNavigation();

  const navigateToDisplayInvoiceData = () => {
    const data = {
      text,
      studentName,
      studentAge,
      studentGrade,
      studentSchool,
      studentAddress,
    };
    navigation.navigate('DisplayInvoiceData', data);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          placeholder="Enter text"
          value={text}
          placeholderTextColor={Colors.Black.Normal40}
          onChangeText={setText}
          style={styles.input}
        />
        <TextInput
          placeholder="Student Name"
          value={studentName}
          placeholderTextColor={Colors.Black.Normal40}
          onChangeText={setStudentName}
          style={styles.input}
        />
        <TextInput
          placeholder="Student Age"
          value={studentAge}
          placeholderTextColor={Colors.Black.Normal40}
          onChangeText={setStudentAge}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Student Grade"
          value={studentGrade}
          placeholderTextColor={Colors.Black.Normal40}
          onChangeText={setStudentGrade}
          style={styles.input}
        />
        <TextInput
          placeholder="Student School"
          value={studentSchool}
          placeholderTextColor={Colors.Black.Normal40}
          onChangeText={setStudentSchool}
          style={styles.input}
        />
        <TextInput
          placeholder="Student Address"
          value={studentAddress}
          placeholderTextColor={Colors.Black.Normal40}
          onChangeText={setStudentAddress}
          style={styles.input}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={navigateToDisplayInvoiceData}
        >
          <Text style={styles.buttonText}>Go to Display Invoice Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: Colors.Black.Normal40,
    width: 300,
    color: Colors.Black.Normal40,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Home;
