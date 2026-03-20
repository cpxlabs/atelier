import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Italic, List, Link } from 'lucide-react-native';
import { styles, colors } from '../styles';

// ── Static source document ──────────────────────────────────────────────────

const SOURCE = {
  category: 'SOURCE MATERIAL',
  page: 'Page 142 of 312',
  title: 'The Architecture of Silence',
  epigraph:
    '"In the modern atelier, the space between the thought and the word is often crowded with digital noise. To reclaim the work, one must first reclaim the silence that precedes it."',
  body1:
    "Consider the physical study: a room defined not just by the books it holds, but by the light that enters it. The curator's task is one of elimination. By removing the non-essential, the core truth of the space is allowed to breathe.",
  body2:
    'The same principle applies to the digital workspace. Every interface element that demands attention is a tax on cognition. True focus is not imposed — it is uncovered.',
};

const INITIAL_NOTES =
  'The concept of "Silence" described in the text aligns with the "Digital Atelier" philosophy. If the UI recedes, the friction of transcription disappears.\n\nKey takeaway: Elimination as a tool for focus rather than just an aesthetic choice. Need to explore further.';

// ── Source material panel ───────────────────────────────────────────────────

const SourcePanel: React.FC = () => (
  <ScrollView
    style={{ flex: 1 }}
    contentContainerStyle={styles.benchSourceContent}
    showsVerticalScrollIndicator={false}
  >
    <View style={styles.benchMeta}>
      <View style={styles.benchBadge}>
        <Text style={styles.benchBadgeText}>{SOURCE.category}</Text>
      </View>
      <Text style={styles.benchPage}>{SOURCE.page}</Text>
    </View>
    <Text style={styles.benchTitle}>{SOURCE.title}</Text>
    <Text style={styles.benchEpigraph}>{SOURCE.epigraph}</Text>
    <Text style={styles.benchBody}>{SOURCE.body1}</Text>
    <Text style={[styles.benchBody, { marginTop: 20 }]}>{SOURCE.body2}</Text>
  </ScrollView>
);

// ── Reflections panel ───────────────────────────────────────────────────────

interface ReflectionsPanelProps {
  notes: string;
  onChangeNotes: (text: string) => void;
}

const ReflectionsPanel: React.FC<ReflectionsPanelProps> = ({ notes, onChangeNotes }) => (
  <View style={styles.benchReflections}>
    <View style={styles.benchReflectionsHeader}>
      <Text style={styles.benchReflectionsLabel}>Reflections</Text>
      <View style={styles.benchToolbar}>
        {/* TODO: apply italic formatting to selected text */}
        <TouchableOpacity style={styles.benchToolbarBtn} activeOpacity={0.7}>
          <Italic size={18} color={colors.secondary} />
        </TouchableOpacity>
        {/* TODO: insert bullet list */}
        <TouchableOpacity style={styles.benchToolbarBtn} activeOpacity={0.7}>
          <List size={18} color={colors.secondary} />
        </TouchableOpacity>
        {/* TODO: insert link */}
        <TouchableOpacity activeOpacity={0.7}>
          <Link size={18} color={colors.secondary} />
        </TouchableOpacity>
      </View>
    </View>
    <TextInput
      style={styles.benchNotesInput}
      multiline
      value={notes}
      onChangeText={onChangeNotes}
      placeholder="Start writing your reflections..."
      placeholderTextColor={colors.muted}
      textAlignVertical="top"
    />
  </View>
);

// ── Bench Screen ────────────────────────────────────────────────────────────

export const BenchScreen: React.FC = () => {
  const [notes, setNotes] = useState(INITIAL_NOTES);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <SourcePanel />
      <ReflectionsPanel notes={notes} onChangeNotes={setNotes} />
    </View>
  );
};
