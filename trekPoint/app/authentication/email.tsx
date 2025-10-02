import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView, 
} from 'react-native';
import { Mountain } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ExplorePage: undefined;
};

export default function EmailSignupFlow() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleContinueEmail = () => {
    if (email) setStep(2);
  };

  const handleContinuePassword = () => {
    if (password) setStep(3);
  };

  const handleFinish = () => {
    console.log('Signup complete:', { email, password, firstName, lastName });
    navigation.navigate('ExplorePage'); 
  };

  const ProgressBar = ({ currentStep }: { currentStep: number }) => (
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, currentStep >= 1 && styles.progressBarActive]} />
      <View style={[styles.progressBar, currentStep >= 2 && styles.progressBarActive]} />
      <View style={[styles.progressBar, currentStep >= 3 && styles.progressBarActive]} />
    </View>
  );

  const BackButton = () => (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => {
        if (step === 1) {
          navigation.goBack(); 
        } else {
          setStep(step > 1 ? step - 1 : 1);
        }
      }}
    >
      <Text style={styles.backArrow}>←</Text>
    </TouchableOpacity>
  );

  const Logo = () => (
    <View style={styles.logoContainer}>
      <Mountain color="#34d399" size={64} strokeWidth={2.5} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {step === 1 && (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.stepContainer}
        >
          <BackButton />
          <Logo />
          <Text style={styles.title}>Let's start with email</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#666"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleContinueEmail}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}

      {step === 2 && (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.stepContainer}
        >
          <BackButton />
          <ProgressBar currentStep={2} />
          <Text style={styles.title}>Create a password</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                placeholderTextColor="#666"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
              >
                <Text style={styles.eyeIcon}>👁</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleContinuePassword}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}

      {step === 3 && (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.stepContainer}
        >
          <BackButton />
          <ProgressBar currentStep={3} />
          <Text style={styles.title}>Enter your name</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>First name</Text>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              autoCapitalize="words"
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last name</Text>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              autoCapitalize="words"
              placeholderTextColor="#666"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleFinish}>
            <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  stepContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  backButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  backArrow: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '300',
  },
  progressContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 60,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#333',
    borderRadius: 2,
  },
  progressBarActive: {
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 60,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
    fontWeight: '400',
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#fff',
    height: 56,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 12,
    height: 56,
  },
  passwordInput: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    color: '#fff',
  },
  eyeButton: {
    padding: 16,
  },
  eyeIcon: {
    fontSize: 20,
  },
  button: {
    backgroundColor: '#f5f5f5',
    borderRadius: 28,
    padding: 18,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
});