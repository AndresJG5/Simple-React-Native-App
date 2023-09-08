import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const Login = ({ navigation }) => {

  return (
    <ImageBackground source={require('./fondo.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
      <Image source={require('./senati.png')} style={styles.image}></Image>
        <Text>INICIO DE SESIÓN</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Registro')} style={styles.button}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Acceso')} style={styles.button}>
          <Text style={styles.buttonText}>Acceder</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default Login;
