import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/images/bg.png')}
      style={styles.background}
      resizeMode="cover" // Как картинка будет заполнять пространство
    >
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Растягиваем на весь экран
    width: '100%',
    height: '100%',
    // backgroundColor: '#a31d1d',
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
