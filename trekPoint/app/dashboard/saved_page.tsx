import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {
  Plus,
  Route,
  Bookmark,
  Map,
  Pencil,
} from 'lucide-react-native';
import Navbar from '../components/navbar';

export default function SavedPage() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Saved</Text>
        <TouchableOpacity>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.tabActive]}>Lists</Text>
        <Text style={styles.tab}>Areas</Text>
        <Text style={styles.tab}>Parks</Text>
        <Text style={styles.tab}>Downloads</Text>
      </View>

      {/* List Items */}
      <ScrollView style={styles.listContainer}>
        <View style={styles.listItem}>
          <View style={styles.iconCircle}>
            <Plus size={32} color="#000" />
          </View>
          <Text style={styles.listText}>Create new list</Text>
        </View>
        <View style={styles.listItem}>
          <View style={styles.iconCircle}>
            <Route size={28} color="#000" />
          </View>
          <Text style={styles.listText}>Build custom route</Text>
        </View>
        <View style={styles.listItem}>
          <View style={styles.iconSquare}>
            <Bookmark size={24} color="#fff" />
          </View>
          <Text style={styles.listText}>Favorites</Text>
        </View>
        <View style={styles.listItem}>
          <View style={styles.iconSquare}>
            <Map size={24} color="#fff" />
          </View>
          <Text style={styles.listText}>Custom routes & maps</Text>
        </View>
      </ScrollView>

      {/* Bottom Navbar */}
      <Navbar activeTab="Saved" onTabPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 8,
  },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff' },
  edit: { fontSize: 18, color: '#fff', opacity: 0.8 },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#232323',
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  tab: { fontSize: 16, color: '#9ca3af', marginRight: 32, paddingBottom: 8 },
  tabActive: { color: '#fff', borderBottomWidth: 2, borderBottomColor: '#fff' },
  listContainer: { paddingHorizontal: 24, marginTop: 16 },
  listItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  iconCircle: {
    width: 48, height: 48, borderRadius: 24, backgroundColor: '#fff',
    alignItems: 'center', justifyContent: 'center', marginRight: 16,
  },
  iconSquare: {
    width: 48, height: 48, borderRadius: 12, backgroundColor: '#18181b',
    alignItems: 'center', justifyContent: 'center', marginRight: 16,
  },
  listText: { fontSize: 18, color: '#fff', fontWeight: '500' },
});