// screens/RegisterScreen.js
import React from 'react';
import { TextInput, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import GradientBackground from '../components/GradientBackground';

const logoURI = "https://your-logo-url.com/logo.png";

const RegisterScreen = ({ navigation }) => {
  return (
    <GradientBackground>
      <Image source={{ uri: logoURI }} style={styles.logo} />
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ccc" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#FCB316',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
