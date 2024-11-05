// screens/ProfileScreen.js
import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import GradientBackground from '../components/GradientBackground';

const logoURI = "https://your-logo-url.com/logo.png";

const ProfileScreen = () => {
  return (
    <GradientBackground>
      <Image source={{ uri: logoURI }} style={styles.logo} />
      <Text style={styles.profileText}>Welcome, [User Name]</Text>
      <Text style={styles.profileText}>Email: [User Email]</Text>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  profileText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 15,
  },
});

export default ProfileScreen;
