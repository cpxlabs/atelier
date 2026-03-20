import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BookOpen, BookMarked, FlaskConical, Plus, User } from 'lucide-react-native';
import { styles, colors } from '../styles';

export type NavTab = 'library' | 'reader' | 'bench' | 'profile';

interface BottomNavProps {
  activeTab?: NavTab;
  onTabPress?: (tab: NavTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab = 'library',
  onTabPress,
}) => {
  const isActive = (tab: NavTab) => activeTab === tab;

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem} onPress={() => onTabPress?.('library')}>
        <BookOpen size={22} color={isActive('library') ? colors.black : colors.muted} />
        <Text style={[styles.navLabel, isActive('library') ? styles.navLabelActive : styles.navLabelInactive]}>
          Library
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => onTabPress?.('reader')}>
        <BookMarked size={22} color={isActive('reader') ? colors.black : colors.muted} />
        <Text style={[styles.navLabel, isActive('reader') ? styles.navLabelActive : styles.navLabelInactive]}>
          Reader
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => onTabPress?.('bench')}>
        <FlaskConical size={22} color={isActive('bench') ? colors.black : colors.muted} />
        <Text style={[styles.navLabel, isActive('bench') ? styles.navLabelActive : styles.navLabelInactive]}>
          Bench
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => onTabPress?.('profile')}>
        <User size={22} color={isActive('profile') ? colors.black : colors.muted} />
        <Text style={[styles.navLabel, isActive('profile') ? styles.navLabelActive : styles.navLabelInactive]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

