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
import { Bell, Search, MoreVertical, Play, Star, Heart, MessageCircle, Download } from 'lucide-react-native';
import Navbar from '../components/navbar';

export default function CommunityPage({ navigation }) {
  const [activeTab, setActiveTab] = useState('Community');
  const [feedTab, setFeedTab] = useState('Local');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Bell Icon */}
        <View style={styles.bellContainer}>
          <TouchableOpacity>
            <Bell color="#fff" size={26} />
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity onPress={() => setFeedTab('Local')} style={styles.tabButton}>
            <Text style={[styles.tabText, feedTab === 'Local' && styles.tabTextActive]}>Local</Text>
            {feedTab === 'Local' && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFeedTab('Following')} style={styles.tabButton}>
            <Text style={[styles.tabText, feedTab === 'Following' && styles.tabTextActive]}>Following</Text>
            {feedTab === 'Following' && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        </View>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Latest in</Text>
        <Text style={styles.sectionTitleBold}>Philippines</Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Search color="#fff" size={22} style={{ marginRight: 10 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Explore by destination"
            placeholderTextColor="#a3a3a3"
          />
        </View>

        {/* Post Card */}
        <View style={styles.postHeader}>
          <View style={styles.profileCircle} />
          <View style={{ flex: 1 }}>
            <Text style={styles.profileName}>Jan Pao Montecillo</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Text style={styles.postDate}>Sep 14 ·</Text>
              <TouchableOpacity>
                <Text style={styles.followText}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity>
            <MoreVertical color="#fff" size={22} />
          </TouchableOpacity>
        </View>

        <View style={styles.postImageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' }}
            style={styles.postImage}
          />
          <TouchableOpacity style={styles.recapButton}>
            <Play color="#fff" size={18} style={{ marginRight: 6 }} />
            <Text style={styles.recapText}>Recap</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.trailInfoContainer}>
          <Text style={styles.trailTitle}>Morning hike at Spartan Trail</Text>
          <Text style={styles.trailLocation}>
            <Text style={styles.trailLocationLink}>Spartan Trail</Text>
            <Text style={styles.trailLocationText}> · Cebu City, Cebu, Philippines</Text>
          </Text>
        </View>

        <View style={styles.trailStatsContainer}>
          <View style={styles.trailStat}>
            <Text style={styles.trailStatLabel}>Length</Text>
            <Text style={styles.trailStatValue}>3.52 mi</Text>
          </View>
          <View style={styles.trailStat}>
            <Text style={styles.trailStatLabel}>Elev. gain</Text>
            <Text style={styles.trailStatValue}>1,955 ft</Text>
          </View>
          <View style={styles.trailStat}>
            <Text style={styles.trailStatLabel}>Time</Text>
            <Text style={styles.trailStatValue}>2h 20m</Text>
          </View>
          <TouchableOpacity style={styles.downloadButton}>
            <Download color="#fff" size={22} />
          </TouchableOpacity>
        </View>

        <View style={styles.ratingContainer}>
          <Star color="#fff" fill="#fff" size={20} style={styles.starIcon} />
          <Star color="#fff" fill="#fff" size={20} style={styles.starIcon} />
          <Star color="#fff" fill="#fff" size={20} style={styles.starIcon} />
          <Star color="#fff" fill="#fff" size={20} style={styles.starIcon} />
          <Star color="#fff" fill="#232323" size={20} style={styles.starIcon} />
        </View>

        <View style={styles.likeCommentContainer}>
          <TouchableOpacity style={styles.likeButton}>
            <Heart color="#fff" size={22} />
            <Text style={styles.likeText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.commentButton}>
            <MessageCircle color="#fff" size={22} />
            <Text style={styles.commentText}>2 comments</Text>
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
  bellContainer: {
    alignItems: 'flex-end',
    marginTop: 18,
    marginHorizontal: 20,
    marginBottom: 8,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    marginLeft: 20,
    gap: 32,
    marginBottom: 8,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingHorizontal: 8,
    paddingBottom: 2,
  },
  tabText: {
    fontSize: 18,
    color: '#a3a3a3',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: '700',
  },
  tabUnderline: {
    position: 'absolute',
    bottom: -2,
    left: '50%',
    transform: [{ translateX: -15 }],
    width: 30,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 28,
    color: '#e5e7eb',
    fontWeight: '400',
    marginLeft: 20,
    marginTop: 18,
    marginBottom: -6,
  },
  sectionTitleBold: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '700',
    marginLeft: 20,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#232323',
    borderRadius: 18,
    marginHorizontal: 20,
    paddingHorizontal: 16,
    height: 48,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 0,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 18, 
    marginBottom: 12, 
    gap: 12,
  },
  profileCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#444',
    marginRight: 12,
  },
  profileName: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  postDate: {
    color: '#a3a3a3',
    fontSize: 13,
    fontWeight: '500',
  },
  followText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  postImageContainer: {
    position: 'relative',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 0,
    marginBottom: 18, 
  },
  postImage: {
    width: '100%',
    height: 220,
    borderRadius: 18,
  },
  recapButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#18181b',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    opacity: 0.95,
  },
  recapText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  trailInfoContainer: {
    marginHorizontal: 20,
    marginTop: 0,
    marginBottom: 18, 
  },
  trailTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 19,
    marginBottom: 2,
  },
  trailLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  trailLocationLink: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  trailLocationText: {
    color: '#e5e7eb',
    fontWeight: '500',
    fontSize: 15,
  },
  trailStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 0,
    marginBottom: 18, 
  },
  trailStat: {
    flex: 1,
    alignItems: 'flex-start',
  },
  trailStatLabel: {
    color: '#e5e7eb',
    fontSize: 13,
    fontWeight: '500',
  },
  trailStatValue: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  downloadButton: {
    padding: 6,
    borderRadius: 16,
    backgroundColor: '#232323',
    marginLeft: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 0,
    marginBottom: 18,
  },
  starIcon: {
    marginRight: 2,
  },
  likeCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 0,
    marginBottom: 18,
    gap: 24,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  likeText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  commentText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
  },
});