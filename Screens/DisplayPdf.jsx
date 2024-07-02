import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';
import Colors from '../assets/colors/theme';

const DisplayPdf = ({ route }) => {
  const { pdfUrl } = route.params;

  return (
    <View style={styles.container}>
      <Pdf
        source={{ uri: pdfUrl, cache: true }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Black.Normal40,
  },
  pdf: {
    flex: 1,
    width: '100%',
  },
});

export default DisplayPdf;
