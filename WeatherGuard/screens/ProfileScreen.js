// screens/ProfileScreen.js
import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import GradientBackground from '../components/GradientBackground';



const ProfileScreen = () => {
  return (
    <GradientBackground>
      <Image source={require('../assets/dp.jpg')} style={styles.logo} />
      <Text style={styles.profileText}>Ethyl Aguid</Text>
      <Text style={styles.profileEmail} >aguid.ethyl110@gmail.com</Text>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 5,
  },
  profileText: {
    color: '#fff',
    fontSize: 30,
    marginTop: 15,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: '#fff',
    fontSize: 10,
    marginTop: 5,
    fontStyle: 'italic',
  },
});

export default ProfileScreen;
