import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Search, SlidersHorizontal, MapPin, Mountain, Waves, ArrowRight, Bookmark } from 'lucide-react-native';
import Navbar from '../components/navbar';

export default function ExplorePage({ navigation }) {
  const [activeTab, setActiveTab] = useState('Explore');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Search color="#fff" size={22} style={{ marginRight: 10 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Find cities"
            placeholderTextColor="#a3a3a3"
          />
          <TouchableOpacity style={styles.filterButton}>
            <SlidersHorizontal color="#fff" size={22} />
          </TouchableOpacity>
        </View>

        {/* Category Buttons */}
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryActive}>
            <MapPin color="#fff" size={24} />
            <Text style={styles.categoryTextActive}>Nearby</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Mountain color="#fff" size={24} />
            <Text style={styles.categoryText}>Epic views</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Waves color="#fff" size={24} />
            <Text style={styles.categoryText}>Rivers</Text>
          </TouchableOpacity>
        </View>

        {/* Promo Card */}
        <View style={styles.promoCard}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Mountain color="#a78bfa" size={22} style={{ marginRight: 8 }} />
            <Text style={styles.promoTitle}>Peak</Text>
          </View>
          <Text style={styles.promoDesc}>
            Explore to the fullest. Try free for 7 days.
          </Text>
          <ArrowRight color="#fff" size={28} style={styles.promoArrow} />
        </View>

        {/* Trail Card */}
        <View style={styles.trailCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' }}
            style={styles.trailImage}
          />
          <TouchableOpacity style={styles.bookmarkButton}>
            <Bookmark color="#fff" size={24} />
          </TouchableOpacity>
          <View style={styles.trailInfo}>
            <Text style={styles.trailTitle}>Mount Isarog via Sulat Resort</Text>
            <Text style={styles.trailSubtitle}>Camaligan, Camarines Sur</Text>
            <Text style={styles.trailDetails}>★ 5.0 · Hard · 7.70 mi · Est. 7h 46m</Text>
          </View>
          <TouchableOpacity style={styles.mapButton}>
            <Text style={styles.mapButtonText}>Map</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Bottom Navbar */}
      <Navbar activeTab={activeTab} onTabPress={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#232323',
    borderRadius: 18,
    marginTop: 18,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    height: 48,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 0,
  },
  filterButton: {
    marginLeft: 8,
    padding: 6,
    borderRadius: 16,
    backgroundColor: '#232323',
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: 18,
    marginHorizontal: 16,
    gap: 12,
  },
  categoryActive: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#18181b',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 14,
    paddingVertical: 10,
    justifyContent: 'center',
    gap: 8,
  },
  category: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#232323',
    borderRadius: 14,
    paddingVertical: 10,
    justifyContent: 'center',
    gap: 8,
  },
  categoryTextActive: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  categoryText: {
    color: '#e5e7eb',
    fontWeight: '500',
    fontSize: 15,
  },
  promoCard: {
    backgroundColor: '#232323',
    borderRadius: 18,
    marginTop: 18,
    marginHorizontal: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#444',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  promoTitle: {
    color: '#a78bfa',
    fontWeight: '700',
    fontSize: 17,
  },
  promoDesc: {
    color: '#e5e7eb',
    fontSize: 15,
    marginLeft: 8,
    flex: 1,
  },
  promoArrow: {
    marginLeft: 12,
  },
  trailCard: {
    backgroundColor: '#18181b',
    borderRadius: 18,
    marginTop: 18,
    marginHorizontal: 16,
    paddingBottom: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  trailImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  bookmarkButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#232323',
    borderRadius: 20,
    padding: 6,
    zIndex: 2,
  },
  trailInfo: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  trailTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 2,
  },
  trailSubtitle: {
    color: '#e5e7eb',
    fontSize: 15,
    marginBottom: 2,
  },
  trailDetails: {
    color: '#e5e7eb',
    fontSize: 14,
    marginBottom: 8,
  },
  mapButton: {
    backgroundColor: '#a3e635',
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginTop: 4,
    paddingVertical: 8,
    paddingHorizontal: 28,
  },
  mapButtonText: {
    color: '#18181b',
    fontWeight: '700',
    fontSize: 17,
  },
});