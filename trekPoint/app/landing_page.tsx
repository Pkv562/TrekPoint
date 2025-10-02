import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import { Mountain } from 'lucide-react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native'; 

type RootStackParamList = {
  EmailSignupFlow: undefined;
  ExplorePage: undefined;
};

export default function TrekPointLanding() {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = (type: string) => {
    setActiveButton(type);
    if (type === 'google' || type === 'facebook') {
      navigation.navigate('ExplorePage'); 
    } else if (type === 'email') {
      navigation.navigate('EmailSignupFlow');
    }
    setTimeout(() => setActiveButton(null), 300);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Mountain color="#34d399" size={64} strokeWidth={2.5} />
      </View>

      {/* Headline */}
      <Text style={styles.headline}>
        Sign up or log in{'\n'}to start exploring
      </Text>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.socialButton,
            styles.googleButton,
            activeButton === 'google' && styles.buttonPressed,
          ]}
          onPress={() => handlePress('google')}
          activeOpacity={0.8}
        >
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
            }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.socialButton,
            styles.facebookButton,
            activeButton === 'facebook' && styles.buttonPressed,
          ]}
          onPress={() => handlePress('facebook')}
          activeOpacity={0.8}
        >
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
            }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.orLine} />
        </View>

        <TouchableOpacity
          style={[
            styles.emailButton,
            activeButton === 'email' && styles.buttonPressed,
          ]}
          onPress={() => handlePress('email')}
          activeOpacity={0.8}
        >
          <Text style={styles.emailButtonText}>Continue with email</Text>
        </TouchableOpacity>
      </View>

      {/* Terms */}
      <Text style={styles.termsText}>
        By continuing to use TrekPoint, you agree to our{' '}
        <Text style={styles.link}>Terms of Service</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoContainer: {
    marginTop: 60,
    marginBottom: 32,
    alignItems: 'center',
  },
  headline: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 40,
    lineHeight: 32,
  },
  buttonsContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    gap: 18,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 32,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: '100%',
    marginBottom: 0,
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
  googleButton: {
    backgroundColor: '#2563eb',
    marginBottom: 14,
  },
  facebookButton: {
    backgroundColor: '#1e40af',
    marginBottom: 14,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#374151',
    marginHorizontal: 8,
  },
  orText: {
    color: '#a7f3d0',
    fontSize: 14,
    fontWeight: '500',
  },
  emailButton: {
    backgroundColor: '#fff',
    borderRadius: 32,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
  emailButtonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  termsText: {
    fontSize: 13,
    color: '#d1d5db',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 24,
    opacity: 0.85,
    paddingHorizontal: 16,
  },
  link: {
    color: '#34d399',
    textDecorationLine: 'underline',
  },
});