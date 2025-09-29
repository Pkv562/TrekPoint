import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Mountain, MapPin, Compass, ChevronRight } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function TrekPointLanding() {
  const [activeButton, setActiveButton] = useState<'login' | 'signup' | null>(null);

  const handleLogin = () => {
    setActiveButton('login');
    // Navigation logic would go here
    setTimeout(() => setActiveButton(null), 300);
  };

  const handleSignup = () => {
    setActiveButton('signup');
    // Navigation logic would go here
    setTimeout(() => setActiveButton(null), 300);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Background decorative circles */}
      <View style={styles.bgCircle1} />
      <View style={styles.bgCircle2} />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Logo Container */}
        <View style={styles.logoContainer}>
          <View style={styles.logoBox}>
            <Mountain color="#ffffff" size={64} strokeWidth={1.5} />
          </View>
        </View>

        {/* App Name */}
        <Text style={styles.appName}>TrekPoint</Text>
        
        {/* Tagline */}
        <Text style={styles.tagline}>Your journey begins here</Text>

        {/* Feature Icons */}
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <MapPin color="#a7f3d0" size={24} />
            </View>
            <Text style={styles.featureText}>Discover</Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Compass color="#a7f3d0" size={24} />
            </View>
            <Text style={styles.featureText}>Navigate</Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Mountain color="#a7f3d0" size={24} />
            </View>
            <Text style={styles.featureText}>Explore</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[
              styles.signupButton,
              activeButton === 'signup' && styles.buttonPressed
            ]}
            onPress={handleSignup}
            activeOpacity={0.8}
          >
            <Text style={styles.signupButtonText}>Get Started</Text>
            <ChevronRight color="#065f46" size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.loginButton,
              activeButton === 'login' && styles.buttonPressed
            ]}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>

        {/* Terms Text */}
        <Text style={styles.termsText}>
          By continuing, you agree to our Terms of Service and Privacy Policy
        </Text>
      </View>

      {/* Bottom Decoration */}
      <View style={styles.bottomDots}>
        <View style={[styles.dot, styles.dotInactive]} />
        <View style={[styles.dot, styles.dotActive]} />
        <View style={[styles.dot, styles.dotInactive]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#065f46',
    position: 'relative',
  },
  bgCircle1: {
    position: 'absolute',
    top: 80,
    left: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  bgCircle2: {
    position: 'absolute',
    bottom: 150,
    right: -80,
    width: 350,
    height: 350,
    borderRadius: 175,
    backgroundColor: 'rgba(110, 231, 183, 0.15)',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    zIndex: 10,
  },
  logoContainer: {
    marginBottom: 32,
  },
  logoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 24,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  appName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 18,
    color: '#a7f3d0',
    marginBottom: 48,
    textAlign: 'center',
  },
  featuresContainer: {
    flexDirection: 'row',
    gap: 32,
    marginBottom: 64,
  },
  featureItem: {
    alignItems: 'center',
  },
  featureIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 12,
    borderRadius: 50,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    color: '#a7f3d0',
  },
  buttonsContainer: {
    width: '100%',
    maxWidth: 380,
    gap: 16,
  },
  signupButton: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    gap: 8,
  },
  signupButtonText: {
    color: '#065f46',
    fontSize: 16,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  termsText: {
    fontSize: 11,
    color: '#a7f3d0',
    textAlign: 'center',
    marginTop: 32,
    opacity: 0.75,
    paddingHorizontal: 32,
  },
  bottomDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingBottom: 40,
    zIndex: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotInactive: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  dotActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});