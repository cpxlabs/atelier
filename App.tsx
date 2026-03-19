import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Header } from './src/components/Header';
import { Stories } from './src/components/Stories';
import { Post } from './src/components/Post';
import { BottomNav } from './src/components/BottomNav';
import { styles } from './src/styles';
import { PostProps } from './src/types';

const FEED_POSTS: PostProps[] = [
  {
    user: 'Alex Rivers',
    content: 'Just finished a long hike! The view from the top was absolutely breathtaking. 🏔️',
    image: 'https://picsum.photos/seed/hike/800/600',
    likes: '1.2k',
    comments: '42',
  },
  {
    user: 'Jordan Smith',
    content: 'Working on a new project today. Can\'t wait to share it with everyone! 💻✨',
    likes: '850',
    comments: '12',
  },
  {
    user: 'Taylor Swift',
    content: 'Coffee and code. The perfect morning. ☕👨‍💻',
    image: 'https://picsum.photos/seed/coffee/800/600',
    likes: '2.5k',
    comments: '156',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="auto" />
      <Header />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Stories />
        {FEED_POSTS.map((post) => (
          <Post key={post.user} {...post} />
        ))}
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}
