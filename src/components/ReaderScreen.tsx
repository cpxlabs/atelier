import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
  Copy,
  Type,
  List,
  ImageIcon,
} from 'lucide-react-native';
import { styles, colors } from '../styles';

// ── Static document data ────────────────────────────────────────────────────────

const DOCUMENT = {
  category: 'RESEARCH',
  lastEdited: 'Last edited 2h ago',
  title: 'Phenomenology of Digital Spaces',
  epigraph:
    '\u201CThe room is no longer a container, but a projection of the mind\u2019s architectural intent.\u201D',
  bodyParagraph1Start: 'As we navigate the ',
  wikiLink: '[[Spatial Computing]]',
  bodyParagraph1End:
    ' landscape, the boundary between physical atelier and digital interface begins to dissolve. In the physical world, depth is provided by light hitting surfaces. In the digital, depth is a semantic construct.',
  imageUri:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=360&fit=crop',
  imageCaption:
    'Fig 1.1 \u2014 The modern study as a synthesis of analog and digital tools.',
  heading2: 'The Architectural Mandate',
  bodyParagraph2Start:
    'The primary challenge of a focused writing environment is the elimination of noise. We achieve this not through minimalism\u2014which can often feel barren\u2014but through ',
  bodyParagraph2Bold: 'Intentional Asymmetry',
  bodyParagraph2End: '.',
  codeFilename: 'LAYOUT_LOGIC.CSS',
  codeContent: `.workspace {
  display: grid;
  gap: var(--spacing-12);
  background: var(--surface);
}`,
};

const BLOCK_TYPES = [
  { icon: Type, label: 'Heading 1', subtitle: 'Large section title', color: colors.accent },
  { icon: List, label: 'Bulleted List', subtitle: 'Simple bulleted points', color: colors.accent },
  { icon: ImageIcon, label: 'Image', subtitle: 'Upload or embed an image', color: colors.teal },
];

// ── Category badge ──────────────────────────────────────────────────────────────

const CategoryBadge: React.FC = () => (
  <View style={styles.readerMeta}>
    <View style={styles.readerBadge}>
      <Text style={styles.readerBadgeText}>{DOCUMENT.category}</Text>
    </View>
    <Text style={styles.readerLastEdited}>{DOCUMENT.lastEdited}</Text>
  </View>
);

// ── Epigraph / Blockquote ───────────────────────────────────────────────────────

const Epigraph: React.FC = () => (
  <View style={styles.readerBlockquote}>
    <Text style={styles.readerBlockquoteText}>{DOCUMENT.epigraph}</Text>
  </View>
);

// ── Body paragraph with wiki-link ───────────────────────────────────────────────

const BodyParagraph1: React.FC = () => (
  <Text style={styles.readerBody}>
    {DOCUMENT.bodyParagraph1Start}
    <Text style={styles.readerWikiLink}>{DOCUMENT.wikiLink}</Text>
    {DOCUMENT.bodyParagraph1End}
  </Text>
);

// ── Image with caption ──────────────────────────────────────────────────────────

const FigureImage: React.FC = () => (
  <View style={styles.readerFigure}>
    <Image
      source={{ uri: DOCUMENT.imageUri }}
      style={styles.readerImage}
      resizeMode="cover"
    />
    <Text style={styles.readerCaption}>{DOCUMENT.imageCaption}</Text>
  </View>
);

// ── Second body paragraph with bold ─────────────────────────────────────────────

const BodyParagraph2: React.FC = () => (
  <Text style={styles.readerBody}>
    {DOCUMENT.bodyParagraph2Start}
    <Text style={styles.readerBold}>{DOCUMENT.bodyParagraph2Bold}</Text>
    {DOCUMENT.bodyParagraph2End}
  </Text>
);

// ── Code block ──────────────────────────────────────────────────────────────────

const CodeBlock: React.FC = () => (
  <View style={styles.readerCodeBlock}>
    <View style={styles.readerCodeHeader}>
      <Text style={styles.readerCodeFilename}>{DOCUMENT.codeFilename}</Text>
      <TouchableOpacity activeOpacity={0.7}>
        <Copy size={16} color={colors.muted} />
      </TouchableOpacity>
    </View>
    <Text style={styles.readerCodeContent}>{DOCUMENT.codeContent}</Text>
  </View>
);

// ── Blocks picker panel ─────────────────────────────────────────────────────────

const BlocksPanel: React.FC = () => (
  <View style={styles.readerBlocksPanel}>
    <Text style={styles.readerBlocksPanelTitle}>BLOCKS</Text>
    {BLOCK_TYPES.map((block) => (
      <TouchableOpacity
        key={block.label}
        style={styles.readerBlockItem}
        activeOpacity={0.7}
      >
        <View style={[styles.readerBlockIcon, { backgroundColor: block.color + '18' }]}>
          <block.icon size={18} color={block.color} />
        </View>
        <View style={styles.readerBlockText}>
          <Text style={styles.readerBlockLabel}>{block.label}</Text>
          <Text style={styles.readerBlockSubtitle}>{block.subtitle}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

// ── Reader Screen ───────────────────────────────────────────────────────────────

export const ReaderScreen: React.FC = () => (
  <ScrollView
    style={styles.readerScreenScroll}
    contentContainerStyle={styles.readerScreenContent}
    showsVerticalScrollIndicator={false}
  >
    <View style={styles.readerContainer}>
      <CategoryBadge />
      <Text style={styles.readerTitle}>{DOCUMENT.title}</Text>
      <Epigraph />
      <BodyParagraph1 />
      <FigureImage />
      <Text style={styles.readerHeading2}>{DOCUMENT.heading2}</Text>
      <BodyParagraph2 />
      <CodeBlock />
      <BlocksPanel />
    </View>
  </ScrollView>
);
