import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Menu, Globe, ChevronDown, Settings, History, Share2 } from 'lucide-react-native';
import { styles, colors } from '../styles';

interface HeaderProps {
  variant?: 'default' | 'reader';
  onSettingsPress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ variant = 'default', onSettingsPress }) => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>
      <TouchableOpacity style={styles.hamburger}>
        <Menu size={22} color={colors.black} />
      </TouchableOpacity>
      <Text style={styles.logo}>The Atelier</Text>
    </View>
    <View style={styles.headerRight}>
      {variant === 'reader' ? (
        <>
          <TouchableOpacity style={styles.headerAction}>
            <History size={20} color={colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerAction}>
            <Share2 size={20} color={colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onSettingsPress}>
            <Settings size={20} color={colors.secondary} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.langPill}>
            <Globe size={16} color={colors.secondary} />
            <Text style={styles.langText}>EN</Text>
            <ChevronDown size={14} color={colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onSettingsPress}>
            <Settings size={20} color={colors.secondary} />
          </TouchableOpacity>
        </>
      )}
    </View>
  </View>
);
