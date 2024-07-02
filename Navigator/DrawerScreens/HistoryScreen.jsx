import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { usePdf } from '../../src/context/PdfContext';
import Colors from '../../assets/colors/theme';
import Icon from 'react-native-vector-icons/Ionicons'; // Adjust the icon name and package based on your preference

const HistoryScreen = ({ navigation }) => {
  const { pdfs } = usePdf();

  // Function to handle back button press
  const goBack = () => {
    navigation.goBack();
  };

  // Function to navigate to DisplayPdf screen
  const onViewPdf = (pdfUrl) => {
    navigation.navigate('DisplayPdf', { pdfUrl });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={Colors.Black.Normal40} />
        </TouchableOpacity>
        <Text style={styles.title}>History</Text>
      </View>
      <FlatList
        data={pdfs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.pdfItem}
            onPress={() => onViewPdf(item.pdfUrl)} // Pass the PDF URL to onViewPdf function
          >
            <Text style={styles.pdfText}>{item.title}</Text>
            <Text style={styles.pdfText}>{item.date}</Text>
            <Text style={styles.pdfText}>{item.description}</Text>
            <Text style={styles.pdfText}>{item.pdfUrl}</Text>
            <Text style={styles.viewPdfButton}>View PDF</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginLeft: 10,
    color: Colors.Black.Normal40,
  },
  backButton: {
    padding: 10,
  },
  pdfItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Black.Normal40,
  },
  pdfText: {
    color: Colors.Black.Normal40,
    marginBottom: 5,
  },
  viewPdfButton: {
    color: Colors.Black.Normal40, // Adjust color as per your design
    marginTop: 10,
  },
});

export default HistoryScreen;
