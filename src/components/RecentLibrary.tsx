import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import { styles, colors } from '../styles';
import { PaperCard } from '../types';

const PAPERS: PaperCard[] = [
  {
    id: '1',
    type: 'PDF',
    size: '4.2MB',
    title: 'Neural Architectures in Modern LLMs',
    description: 'A comprehensive study of attention mechanisms and context retention.',
    lastRead: 'Last read 2h ago',
    bgColor: '#6b9e9e',
  },
  {
    id: '2',
    type: 'PHD',
    size: '12MB',
    title: 'The Geometry of Gradient Descent',
    description: 'Exploring convergence properties in high-dimensional optimization.',
    lastRead: 'Last read 1d ago',
    bgColor: '#8b7ea0',
  },
  {
    id: '3',
    type: 'PDF',
    size: '2.8MB',
    title: 'Quantum Error Correction',
    description: 'Advances in topological codes for fault-tolerant computation.',
    lastRead: 'Last read 3d ago',
    bgColor: '#7a8e6e',
  },
];

const PaperCardView: React.FC<{ paper: PaperCard }> = ({ paper }) => (
  <View style={styles.paperCard}>
    <View style={[styles.paperImageWrap, { backgroundColor: paper.bgColor }]}>
      <View style={styles.paperBadge}>
        <Text style={styles.paperBadgeText}>
          {paper.type} • {paper.size}
        </Text>
      </View>
      {/* Abstract decorative element */}
      <Text style={styles.paperDecoEmoji}>📄</Text>
    </View>
    <View style={styles.paperBody}>
      <Text style={styles.paperTitle} numberOfLines={2}>
        {paper.title}
      </Text>
      <Text style={styles.paperDesc} numberOfLines={2}>
        {paper.description}
      </Text>
      <View style={styles.paperMeta}>
        <View style={styles.paperMetaDot} />
        <Text style={styles.paperMetaText}>{paper.lastRead}</Text>
      </View>
    </View>
  </View>
);

export const RecentLibrary: React.FC = () => (
  <View style={styles.recentLibraryWrap}>
    <View style={[styles.sectionHeader, styles.recentLibrarySectionHeader]}>
      <Text style={[styles.sectionTitle, styles.sectionTitleNoMargin]}>Recent Library</Text>
      <TouchableOpacity style={styles.viewAll}>
        <Text style={styles.viewAllText}>View Library</Text>
        <ArrowRight size={16} color={colors.accent} />
      </TouchableOpacity>
    </View>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.libraryScroll}
    >
      {PAPERS.map((paper) => (
        <PaperCardView key={paper.id} paper={paper} />
      ))}
    </ScrollView>
  </View>
);
