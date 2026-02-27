import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ResumeCard from '../components/ResumeCard/ResumeCard';
import ButtonDownload from '../components/ButtonDownload/ButtonDownload';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ResumeCard
        fullName="Королев Алексей Викторович"
        position="Manual QA / AQA / React Native"
        language="RU / EN / KZ"
      />
      <ButtonDownload title="Скачать CV QA/AQA" pdfUrl="https://github.com/kingov-alexey/kingov_alexey-CV/tree/main/assets/pdf/Korolev_Alexey_CV-QA_RU.pdf" />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: { padding: 20 },
});