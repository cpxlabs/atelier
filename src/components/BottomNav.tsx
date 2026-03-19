import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BookOpen, BookMarked, StickyNote, Plus } from 'lucide-react-native';
import { styles, colors } from '../styles';

export const BottomNav: React.FC = () => (
  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <BookOpen size={22} color={colors.black} />
      <Text style={[styles.navLabel, styles.navLabelActive]}>Library</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <BookMarked size={22} color={colors.muted} />
      <Text style={[styles.navLabel, styles.navLabelInactive]}>Reader</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <StickyNote size={22} color={colors.muted} />
      <Text style={[styles.navLabel, styles.navLabelInactive]}>Bench</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.fabButton}>
      <Plus size={24} color={colors.white} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <StickyNote size={22} color={colors.muted} />
      <Text style={[styles.navLabel, styles.navLabelInactive]}>Notes</Text>
    </TouchableOpacity>
  </View>
);
