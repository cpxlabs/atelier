import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  GestureResponderEvent,
  LayoutChangeEvent,
} from 'react-native';
import { Check } from 'lucide-react-native';
import { styles, colors } from '../styles';
import { Theme, InterfaceDynamics } from '../types';
import { LIGHT_THEMES, DARK_THEMES } from '../themes';
import { UseThemeReturn } from '../hooks/useTheme';

// ── Toggle Switch ─────────────────────────────────────────────────────────────

interface ToggleProps {
  value: boolean;
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ value, onToggle }) => (
  <TouchableOpacity
    onPress={onToggle}
    activeOpacity={0.8}
    style={[styles.toggleTrack, value && styles.toggleTrackActive]}
  >
    <View style={[styles.toggleThumb, value && styles.toggleThumbActive]} />
  </TouchableOpacity>
);

// ── Slider ────────────────────────────────────────────────────────────────────

interface SliderProps {
  value: number; // 0–1
  onChange: (v: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  const [trackWidth, setTrackWidth] = React.useState(0);

  const handleLayout = (e: LayoutChangeEvent) => {
    setTrackWidth(e.nativeEvent.layout.width);
  };

  const handlePress = (e: GestureResponderEvent) => {
    if (trackWidth === 0) return;
    const x = e.nativeEvent.locationX;
    const clamped = Math.max(0, Math.min(1, x / trackWidth));
    onChange(clamped);
  };

  const thumbLeft = trackWidth > 0 ? value * trackWidth - 9 : 0;

  return (
    <View style={styles.sliderRow}>
      <Text style={styles.sliderLabel}>Compact</Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.sliderTrack}
        onLayout={handleLayout}
        onPress={handlePress}
      >
        <View style={[styles.sliderFill, { width: `${value * 100}%` }]} />
        {trackWidth > 0 && (
          <View style={[styles.sliderThumb, { left: thumbLeft }]} />
        )}
      </TouchableOpacity>
      <Text style={[styles.sliderLabel, styles.sliderLabelRight]}>Standard</Text>
    </View>
  );
};

// ── Theme Card ────────────────────────────────────────────────────────────────

interface ThemeCardProps {
  theme: Theme;
  selected: boolean;
  onSelect: () => void;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme, selected, onSelect }) => {
  const c = theme.colors;
  return (
    <View style={styles.themeCardWrapper}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onSelect}
        style={[
          styles.themeCard,
          { backgroundColor: c.background },
          selected && styles.themeCardSelected,
        ]}
      >
        {/* Color dot swatches */}
        <View style={styles.themeCardDots}>
          <View style={[styles.themeCardDot, { backgroundColor: theme.preview.dot1 }]} />
          <View style={[styles.themeCardDot, { backgroundColor: theme.preview.dot2 }]} />
        </View>

        {/* Simulated content lines */}
        <View style={styles.themeCardLines}>
          <View style={[styles.themeCardLine, { backgroundColor: c.border, width: '85%' }]} />
          <View style={[styles.themeCardLine, { backgroundColor: c.border, width: '75%' }]} />
          <View style={[styles.themeCardLine, { backgroundColor: c.border }, styles.themeCardLineShort]} />
        </View>

        {/* Selected checkmark */}
        {selected && (
          <View style={styles.themeCardCheckmark}>
            <Check size={13} color={c.background} strokeWidth={3} />
          </View>
        )}
      </TouchableOpacity>

      <Text style={styles.themeCardName}>{theme.name}</Text>
    </View>
  );
};

// ── Interface Dynamics ────────────────────────────────────────────────────────

interface DynamicsProps {
  dynamics: InterfaceDynamics;
  updateDynamics: (patch: Partial<InterfaceDynamics>) => void;
}

const InterfaceDynamicsPanel: React.FC<DynamicsProps> = ({ dynamics, updateDynamics }) => (
  <View style={styles.dynamicsCard}>
    <Text style={styles.dynamicsTitle}>Interface Dynamics</Text>

    <View style={styles.dynamicsDivider} />

    {/* Auto-Focus Mode */}
    <View style={styles.dynamicsItem}>
      <View style={styles.dynamicsItemText}>
        <Text style={styles.dynamicsItemTitle}>Auto-Focus Mode</Text>
        <Text style={styles.dynamicsItemDesc}>
          Dim secondary UI elements during deep work sessions.
        </Text>
      </View>
      <Toggle
        value={dynamics.autoFocusMode}
        onToggle={() => updateDynamics({ autoFocusMode: !dynamics.autoFocusMode })}
      />
    </View>

    <View style={styles.dynamicsDivider} />

    {/* Typography Scaling */}
    <View style={[styles.dynamicsItem, styles.dynamicsItemColumn]}>
      <View style={[styles.dynamicsItemText, styles.dynamicsItemTextFull]}>
        <Text style={styles.dynamicsItemTitle}>Typography Scaling</Text>
        <Text style={styles.dynamicsItemDesc}>
          Optimize the Newsreader serif size for digital reading.
        </Text>
      </View>
      <Slider
        value={dynamics.typographyScaling}
        onChange={(v) => updateDynamics({ typographyScaling: v })}
      />
    </View>

    <View style={styles.dynamicsDivider} />

    {/* Academic Accents */}
    <View style={styles.dynamicsItem}>
      <View style={styles.dynamicsItemText}>
        <Text style={styles.dynamicsItemTitle}>Academic Accents</Text>
        <Text style={styles.dynamicsItemDesc}>
          Enable ink style high contrast selection markers.
        </Text>
      </View>
      <Toggle
        value={dynamics.academicAccents}
        onToggle={() => updateDynamics({ academicAccents: !dynamics.academicAccents })}
      />
    </View>
  </View>
);

// ── Theme Screen ──────────────────────────────────────────────────────────────

export type ThemeScreenProps = Pick<
  UseThemeReturn,
  'activeThemeId' | 'setTheme' | 'dynamics' | 'updateDynamics'
>;

export const ThemeScreen: React.FC<ThemeScreenProps> = ({
  activeThemeId,
  setTheme,
  dynamics,
  updateDynamics,
}) => (
  <ScrollView
    style={styles.themeScreenScroll}
    contentContainerStyle={styles.themeScreenContent}
    showsVerticalScrollIndicator={false}
  >
    {/* Heading */}
    <Text style={styles.themeScreenHeading}>Choose your atelier</Text>
    <Text style={styles.themeScreenSubtitle}>
      The environment of your study shapes the quality of your focus. Select a palette that mirrors
      your creative state.
    </Text>

    {/* Light Modes */}
    <Text style={styles.themeSectionLabel}>Light Modes</Text>
    <View style={styles.themeCardGrid}>
      {LIGHT_THEMES.map((theme) => (
        <ThemeCard
          key={theme.id}
          theme={theme}
          selected={theme.id === activeThemeId}
          onSelect={() => setTheme(theme.id)}
        />
      ))}
    </View>

    {/* Dark Modes */}
    <Text style={styles.themeSectionLabel}>Dark Modes</Text>
    <View style={styles.themeCardGrid}>
      {DARK_THEMES.map((theme) => (
        <ThemeCard
          key={theme.id}
          theme={theme}
          selected={theme.id === activeThemeId}
          onSelect={() => setTheme(theme.id)}
        />
      ))}
    </View>

    {/* Interface Dynamics */}
    <InterfaceDynamicsPanel dynamics={dynamics} updateDynamics={updateDynamics} />
  </ScrollView>
);
