import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StickyNote, Plus, MoreVertical, ArrowRight } from 'lucide-react-native';
import { styles, colors } from '../styles';

// ── Static note data ────────────────────────────────────────────────────────

interface NoteEntry {
  id: string;
  title: string;
  preview: string;
  modified: string;
  color: string;
}

const PINNED_NOTES: NoteEntry[] = [
  {
    id: '1',
    title: 'Research Methodology Draft',
    preview: 'Outline for the qualitative analysis framework used in Ch. 3…',
    modified: 'Modified 20m ago',
    color: colors.accent,
  },
  {
    id: '2',
    title: 'Conference Talk Prep',
    preview: 'Key points for the keynote on digital phenomenology at SIGCHI…',
    modified: 'Modified 2h ago',
    color: '#6b9e9e',
  },
];

const ALL_NOTES: NoteEntry[] = [
  {
    id: '3',
    title: 'Weekly Reading Summary',
    preview: 'Notes from three papers on attention mechanisms and transformer…',
    modified: 'Modified 1d ago',
    color: '#7c6dab',
  },
  {
    id: '4',
    title: 'Grant Proposal Ideas',
    preview: 'Potential funding sources for the spatial computing lab…',
    modified: 'Modified 2d ago',
    color: colors.accent,
  },
  {
    id: '5',
    title: 'Book Club: The Structure of Scientific Revolutions',
    preview: "Kuhn’s paradigm shift concept applied to modern ML research…",
    modified: 'Modified 4d ago',
    color: '#6b9e9e',
  },
  {
    id: '6',
    title: 'Lab Meeting Agenda',
    preview: "Discussion items for next Tuesday’s session with the team…",
    modified: 'Modified 1w ago',
    color: '#7c6dab',
  },
];

// ── Note Card ───────────────────────────────────────────────────────────────

const NoteCard: React.FC<{ note: NoteEntry }> = ({ note }) => (
  <TouchableOpacity style={styles.noteCard} activeOpacity={0.7}>
    <View style={styles.noteCardHeader}>
      <View style={[styles.noteCardDot, { backgroundColor: note.color }]} />
      <View style={styles.noteCardInfo}>
        <Text style={styles.noteCardTitle} numberOfLines={1}>
          {note.title}
        </Text>
        <Text style={styles.noteCardPreview} numberOfLines={2}>
          {note.preview}
        </Text>
      </View>
      <TouchableOpacity style={styles.notebookMenu}>
        <MoreVertical size={18} color={colors.muted} />
      </TouchableOpacity>
    </View>
    <Text style={styles.noteCardMeta}>{note.modified}</Text>
  </TouchableOpacity>
);

// ── Notes Screen ────────────────────────────────────────────────────────────

export const NotesScreen: React.FC = () => (
  <ScrollView
    style={styles.notesContainer}
    contentContainerStyle={styles.notesContent}
    showsVerticalScrollIndicator={false}
  >
    {/* Header */}
    <View style={styles.notesHeaderRow}>
      <View>
        <Text style={styles.notesHeading}>Notes</Text>
        <Text style={styles.notesSubtitle}>42 notation files</Text>
      </View>
      <TouchableOpacity style={styles.notesNewBtn} activeOpacity={0.8}>
        <Plus size={18} color={colors.white} />
        <Text style={styles.notesNewBtnText}>New</Text>
      </TouchableOpacity>
    </View>

    {/* Pinned Section */}
    <View style={styles.notesSectionHeader}>
      <Text style={styles.notesSectionLabel}>Pinned</Text>
      <StickyNote size={14} color={colors.muted} />
    </View>
    {PINNED_NOTES.map((note) => (
      <NoteCard key={note.id} note={note} />
    ))}

    {/* All Notes Section */}
    <View style={styles.notesSectionHeader}>
      <Text style={styles.notesSectionLabel}>All Notes</Text>
      <TouchableOpacity style={styles.viewAll}>
        <Text style={styles.viewAllText}>View All</Text>
        <ArrowRight size={16} color={colors.accent} />
      </TouchableOpacity>
    </View>
    {ALL_NOTES.map((note) => (
      <NoteCard key={note.id} note={note} />
    ))}
  </ScrollView>
);
