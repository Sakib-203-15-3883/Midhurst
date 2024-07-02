import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Colors from '../assets/colors/theme';
import { usePdf } from '../src/context/PdfContext';

const DisplayInvoiceData = ({ route, navigation }) => {
  const { text, studentName, studentAge, studentGrade, studentSchool, studentAddress } = route.params;
  const { addPdf } = usePdf();

  const generatePDF = async () => {
    try {
      const htmlContent = `
        <html>
          <body>
            <h1>Invoice Data</h1>
            <p>Text: ${text}</p>
            <p>Student Name: ${studentName}</p>
            <p>Student Age: ${studentAge}</p>
            <p>Student Grade: ${studentGrade}</p>
            <p>Student School: ${studentSchool}</p>
            <p>Student Address: ${studentAddress}</p>
          </body>
        </html>
      `;

      const options = {
        html: htmlContent,
        fileName: 'invoice_data',
        directory: 'Documents',
      };

      const file = await RNHTMLtoPDF.convert(options);
      addPdf(file.filePath);
      Alert.alert('PDF Created!', `PDF saved at: ${file.filePath}`);
      navigation.navigate('History');
    } catch (error) {
      Alert.alert('Error!', 'Failed to generate PDF.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invoice Data</Text>
      <Text style={styles.text}>Text: {text}</Text>
      <Text style={styles.text}>Student Name: {studentName}</Text>
      <Text style={styles.text}>Student Age: {studentAge}</Text>
      <Text style={styles.text}>Student Grade: {studentGrade}</Text>
      <Text style={styles.text}>Student School: {studentSchool}</Text>
      <Text style={styles.text}>Student Address: {studentAddress}</Text>

      <TouchableOpacity style={styles.button} onPress={generatePDF}>
        <Text style={styles.buttonText}>Generate PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: Colors.Black.Normal40,
  },
  text: {
    color: Colors.Black.Normal40,
    marginBottom: 10,
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

export default DisplayInvoiceData;
