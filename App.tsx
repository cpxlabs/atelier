import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Header } from './src/components/Header';
import { CategoryGrid } from './src/components/CategoryGrid';
import { RecentLibrary } from './src/components/RecentLibrary';
import { ActiveNotebooks } from './src/components/ActiveNotebooks';
import { BottomNav } from './src/components/BottomNav';
import { styles } from './src/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="dark" />
      <Header />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <CategoryGrid />
        <RecentLibrary />
        <ActiveNotebooks />
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}
