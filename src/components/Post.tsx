import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react-native';
import { styles } from '../styles';
import { PostProps } from '../types';

export const Post: React.FC<PostProps> = ({ user, content, image, likes, comments }) => (
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
