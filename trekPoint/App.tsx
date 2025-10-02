/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TrekPointLanding from './app/landing_page';
import EmailSignupFlow from './app/authentication/email';
import ExplorePage from './app/dashboard/explore_page';
import CommunityPage from './app/dashboard/community_page';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens();

const Stack = createStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="TrekPointLanding"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TrekPointLanding" component={TrekPointLanding} />
          <Stack.Screen name="EmailSignupFlow" component={EmailSignupFlow} />
          <Stack.Screen name="ExplorePage" component={ExplorePage} />
          <Stack.Screen name="CommunityPage" component={CommunityPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
