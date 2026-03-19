import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';
import { styles } from '../styles';
import { StoryUser } from '../types';

const STORY_USERS: StoryUser[] = [
  { name: 'Alex' },
  { name: 'Jordan' },
  { name: 'Taylor' },
  { name: 'Casey' },
  { name: 'Riley' },
];

export const Stories: React.FC = () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
    <TouchableOpacity style={styles.addStory}>
      <View style={styles.addStoryIcon}>
        <Plus size={24} color="#fff" />
      </View>
      <Text style={styles.storyText}>Your Story</Text>
    </TouchableOpacity>
    {STORY_USERS.map((storyUser) => (
      <TouchableOpacity key={storyUser.name} style={styles.story}>
        <View style={styles.storyRing}>
          <Image source={{ uri: `https://picsum.photos/seed/${storyUser.name}/100/100` }} style={styles.storyAvatar} />
        </View>
        <Text style={styles.storyText}>{storyUser.name}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);
