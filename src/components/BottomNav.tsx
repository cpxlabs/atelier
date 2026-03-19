import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Home, Layout, Plus, User, Settings } from 'lucide-react-native';
import { styles } from '../styles';

export const BottomNav: React.FC = () => (
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
);
