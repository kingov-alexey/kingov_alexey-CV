import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ResumeCardProps {
  fullName: string;
  position: string;
  language: string;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ fullName, position, language }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{fullName}</Text>
      <Text style={styles.position}>{position}</Text>
      <Text style={styles.language}>{language}</Text>
    </View>
  )
}

export default ResumeCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#62c5ff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  name: { fontSize: 20, fontWeight: 'bold' },
  position: { fontSize: 16, marginTop: 5 },
  language: { fontSize: 14, color: 'gray', marginTop: 2 },
});