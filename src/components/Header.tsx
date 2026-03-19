import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Search, Bell } from 'lucide-react-native';
import { styles } from '../styles';

export const Header: React.FC = () => (
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
);
