import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MoreVertical } from 'lucide-react-native';
import { styles, colors } from '../styles';
import { NotebookItem } from '../types';

const NOTEBOOKS: NotebookItem[] = [
  {
    id: '1',
    title: 'Synthesis: Quantum Field Theory',
    words: '1,420 words',
    modified: 'Modified 45m ago',
    color: '#7c6dab',
  },
  {
    id: '2',
    title: 'Meeting Minutes: Department of Humanities',
    words: '350 words',
    modified: 'Modified Yesterday',
    color: '#7c6dab',
  },
  {
    id: '3',
    title: 'Personal Reading Log 2024',
    words: '8,900 words',
    modified: 'Modified 3 days ago',
    color: '#7c6dab',
  },
];

export const ActiveNotebooks: React.FC = () => (
  <View style={styles.activeNotebooksWrap}>
    <View style={[styles.section, styles.sectionNoTopMargin]}>
      <Text style={styles.sectionTitle}>Active Notebooks</Text>
    </View>
    {NOTEBOOKS.map((nb) => (
      <TouchableOpacity key={nb.id} style={styles.notebookItem} activeOpacity={0.7}>
        <View style={[styles.notebookDot, { backgroundColor: nb.color }]} />
        <View style={styles.notebookInfo}>
          <Text style={styles.notebookTitle} numberOfLines={1}>
            {nb.title}
          </Text>
          <Text style={styles.notebookMeta}>
            {nb.words} • {nb.modified}
          </Text>
        </View>
        <TouchableOpacity style={styles.notebookMenu}>
          <MoreVertical size={18} color={colors.muted} />
        </TouchableOpacity>
      </TouchableOpacity>
    ))}
  </View>
);
