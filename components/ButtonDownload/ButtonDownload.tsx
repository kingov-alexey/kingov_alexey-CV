import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

interface ButtonDownloadProps {
  title: string;
  pdfUrl: string;
}

const ButtonDownload: React.FC<ButtonDownloadProps> = ({ title, pdfUrl }) => {
  const handlePress = () => {
    Linking.openURL(pdfUrl);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0077cc',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  text: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default ButtonDownload;