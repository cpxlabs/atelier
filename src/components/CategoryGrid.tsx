import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BookOpen, FileEdit, LayoutGrid, PlusCircle } from 'lucide-react-native';
import { styles, colors } from '../styles';
import { CategoryItem } from '../types';

const CATEGORIES: CategoryItem[] = [
  { icon: 'reading', label: 'Reading', subtitle: '14 Active Papers', color: colors.surfaceLight },
  { icon: 'notes', label: 'Notes', subtitle: '42 Notation Files', color: colors.accentLight },
  { icon: 'projects', label: 'Projects', subtitle: '3 Research Tracks', color: colors.surfaceLight },
  { icon: 'new', label: 'New space', subtitle: 'Create category', color: colors.surfaceLight },
];

const iconMap: Record<string, React.ReactNode> = {
  reading: <BookOpen size={22} color={colors.black} />,
  notes: <FileEdit size={22} color={colors.accent} />,
  projects: <LayoutGrid size={22} color={colors.black} />,
  new: <PlusCircle size={22} color={colors.secondary} />,
};

const iconBgMap: Record<string, string> = {
  reading: '#e0e0d8',
  notes: '#d8d4e8',
  projects: '#e0e0d8',
  new: '#e0e0d8',
};

export const CategoryGrid: React.FC = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Your Atelier</Text>
    <View style={styles.categoryGrid}>
      {CATEGORIES.map((cat) => (
        <TouchableOpacity
          key={cat.label}
          style={[styles.categoryCard, { backgroundColor: cat.color }]}
          activeOpacity={0.7}
        >
          <View style={[styles.categoryIcon, { backgroundColor: iconBgMap[cat.icon] }]}>
            {iconMap[cat.icon]}
          </View>
          <View>
            <Text style={styles.categoryLabel}>{cat.label}</Text>
            <Text style={styles.categorySubtitle}>{cat.subtitle}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);
