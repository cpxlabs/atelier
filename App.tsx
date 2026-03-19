import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, StatusBar, Dimensions } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Home, Search, Bell, Plus, Heart, MessageCircle, Share2, Bookmark, User, Layout, Settings } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const Post = ({ user, content, image, likes, comments }: any) => (
  <View style={styles.postCard}>
    <View style={styles.postHeader}>
      <Image source={{ uri: `https://picsum.photos/seed/${user}/100/100` }} style={styles.avatar} />
      <View>
        <Text style={styles.userName}>{user}</Text>
        <Text style={styles.postTime}>2 hours ago</Text>
      </View>
    </View>
    <Text style={styles.postContent}>{content}</Text>
    {image && <Image source={{ uri: image }} style={styles.postImage} />}
    <View style={styles.postActions}>
      <TouchableOpacity style={styles.actionButton}>
        <Heart size={20} color="#666" />
        <Text style={styles.actionText}>{likes}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <MessageCircle size={20} color="#666" />
        <Text style={styles.actionText}>{comments}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Share2 size={20} color="#666" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Bookmark size={20} color="#666" />
      </TouchableOpacity>
    </View>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="auto" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>SocialApp</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Search size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Bell size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Stories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
          <TouchableOpacity style={styles.addStory}>
            <View style={styles.addStoryIcon}>
              <Plus size={24} color="#fff" />
            </View>
            <Text style={styles.storyText}>Your Story</Text>
          </TouchableOpacity>
          {['Alex', 'Jordan', 'Taylor', 'Casey', 'Riley'].map((name) => (
            <TouchableOpacity key={name} style={styles.story}>
              <View style={styles.storyRing}>
                <Image source={{ uri: `https://picsum.photos/seed/${name}/100/100` }} style={styles.storyAvatar} />
              </View>
              <Text style={styles.storyText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Feed */}
        <Post 
          user="Alex Rivers" 
          content="Just finished a long hike! The view from the top was absolutely breathtaking. 🏔️" 
          image="https://picsum.photos/seed/hike/800/600"
          likes="1.2k"
          comments="42"
        />
        <Post 
          user="Jordan Smith" 
          content="Working on a new project today. Can't wait to share it with everyone! 💻✨" 
          likes="850"
          comments="12"
        />
        <Post 
          user="Taylor Swift" 
          content="Coffee and code. The perfect morning. ☕👨‍💻" 
          image="https://picsum.photos/seed/coffee/800/600"
          likes="2.5k"
          comments="156"
        />
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Home size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Layout size={28} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Plus size={28} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <User size={28} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Settings size={28} color="#666" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000',
    letterSpacing: -1,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  content: {
    flex: 1,
  },
  storiesContainer: {
    paddingVertical: 15,
    paddingLeft: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  addStory: {
    alignItems: 'center',
    marginRight: 15,
  },
  addStoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  story: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#000',
    padding: 2,
    marginBottom: 5,
  },
  storyAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  storyText: {
    fontSize: 12,
    color: '#333',
  },
  postCard: {
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingVertical: 15,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  postTime: {
    fontSize: 12,
    color: '#666',
  },
  postContent: {
    fontSize: 15,
    color: '#333',
    paddingHorizontal: 15,
    marginBottom: 10,
    lineHeight: 20,
  },
  postImage: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  postActions: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  actionText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    padding: 5,
  },
});
