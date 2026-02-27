import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ResumeCard from '../components/ResumeCard/ResumeCard';
import ButtonDownload from '../components/ButtonDownload/ButtonDownload';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ResumeCard
        fullName="Королев Алексей Викторович"
        position="Senior Manual QA / Middle AQA / Junior React Native"
        language="RU / EN / KZ"
      />

      <ButtonDownload title="Скачать Senior Manual RU" pdfUrl="https://github.com/kingov-alexey/kingov_alexey-CV/tree/main/assets/pdf/Korolev_Alexey_CV-QA_RU.pdf" />
      {/* <ButtonDownload title="Скачать Middle AQA EN" pdfUrl="https://github.com/<username>/cv-app/raw/main/src/assets/pdf/middle_aqa_en.pdf" />
      <ButtonDownload title="Скачать Junior RN KZ" pdfUrl="https://github.com/<username>/cv-app/raw/main/src/assets/pdf/junior_rn_kz.pdf" />
      https://github.com/kingov-alexey/kingov_alexey-CV/tree/main/assets/pdf */}
    </ScrollView>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
  container: { padding: 20 },
});