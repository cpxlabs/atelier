import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Header } from './src/components/Header';
import { CategoryGrid } from './src/components/CategoryGrid';
import { RecentLibrary } from './src/components/RecentLibrary';
import { ActiveNotebooks } from './src/components/ActiveNotebooks';
import { BottomNav, NavTab } from './src/components/BottomNav';
import { ThemeScreen } from './src/components/ThemeScreen';
import { ProfileScreen } from './src/components/ProfileScreen';
import { styles } from './src/styles';
import { useTheme } from './src/hooks/useTheme';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('library');
  const [showThemeScreen, setShowThemeScreen] = useState(false);
  const { activeThemeId, setTheme, dynamics, updateDynamics } = useTheme();

  const handleTabPress = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab !== 'library') {
      setShowThemeScreen(false);
    }
  };

  const renderContent = () => {
    if (activeTab === 'profile') {
      return <ProfileScreen />;
    }

    if (showThemeScreen) {
      return (
        <ThemeScreen
          activeThemeId={activeThemeId}
          setTheme={setTheme}
          dynamics={dynamics}
          updateDynamics={updateDynamics}
        />
      );
    }

    return (
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <CategoryGrid />
        <RecentLibrary />
        <ActiveNotebooks />
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="dark" />
      <Header onSettingsPress={() => {
        setShowThemeScreen((v) => !v);
        setActiveTab('library');
      }} />
      {renderContent()}
      <BottomNav activeTab={activeTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
}
