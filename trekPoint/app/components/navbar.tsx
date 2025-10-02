import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
  Search,
  Users,
  Navigation,
  Bookmark,
  User,
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const tabs = [
  { name: 'Explore', icon: Search },
  { name: 'Community', icon: Users },
  { name: 'Navigate', icon: Navigation },
  { name: 'Saved', icon: Bookmark },
  { name: 'Profile', icon: User },
];

type NavbarProps = {
  activeTab: string;
  onTabPress: (tabName: string) => void;
};

export default function Navbar({ activeTab, onTabPress }: NavbarProps) {
  const navigation = useNavigation() as { navigate: (route: string) => void };

  const handleTabPress = (tabName: string) => {
    onTabPress(tabName);
    if (tabName === 'Explore') navigation.navigate('ExplorePage');
    if (tabName === 'Community') navigation.navigate('CommunityPage');
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.name;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => handleTabPress(tab.name)}
            activeOpacity={0.7}
          >
            <Icon
              color={isActive ? '#fff' : '#9ca3af'}
              size={24}
              strokeWidth={2.2}
            />
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.name}
            </Text>
            {isActive && tab.name === 'Community' && (
              <View style={styles.dot} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#18181b',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#232323',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingVertical: 2,
  },
  label: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 2,
    fontWeight: '500',
  },
  labelActive: {
    color: '#fff',
  },
  dot: {
    position: 'absolute',
    top: 0,
    right: '40%',
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#3b82f6',
  },
});