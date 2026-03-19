import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Header } from './src/components/Header';
import { CategoryGrid } from './src/components/CategoryGrid';
import { RecentLibrary } from './src/components/RecentLibrary';
import { ActiveNotebooks } from './src/components/ActiveNotebooks';
import { BottomNav } from './src/components/BottomNav';
import { ThemeScreen } from './src/components/ThemeScreen';
import { styles } from './src/styles';
import { useTheme } from './src/hooks/useTheme';

export default function App() {
  const [showThemeScreen, setShowThemeScreen] = useState(false);
  const { activeThemeId, setTheme, dynamics, updateDynamics } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="dark" />
      <Header onSettingsPress={() => setShowThemeScreen((v) => !v)} />
      {showThemeScreen ? (
        <ThemeScreen
          activeThemeId={activeThemeId}
          setTheme={setTheme}
          dynamics={dynamics}
          updateDynamics={updateDynamics}
        />
      ) : (
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <CategoryGrid />
          <RecentLibrary />
          <ActiveNotebooks />
        </ScrollView>
      )}
      <BottomNav />
    </SafeAreaView>
  );
}
