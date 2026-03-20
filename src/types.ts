export interface CategoryItem {
  icon: string;
  label: string;
  subtitle: string;
  color: string;
}

export interface PaperCard {
  id: string;
  type: string;
  size: string;
  title: string;
  description: string;
  lastRead: string;
  image?: string;
  bgColor: string;
}

export interface NotebookItem {
  id: string;
  title: string;
  words: string;
  modified: string;
  color: string;
}

export interface ThemeColors {
  background: string;
  surface: string;
  surfaceLight: string;
  primary: string;
  secondary: string;
  accent: string;
  accentLight: string;
  muted: string;
  border: string;
  white: string;
  black: string;
}

export interface Theme {
  id: string;
  name: string;
  mode: 'light' | 'dark';
  colors: ThemeColors;
  preview: { dot1: string; dot2: string };
}

export interface InterfaceDynamics {
  autoFocusMode: boolean;
  typographyScaling: number; // 0 = Compact, 1 = Standard
  academicAccents: boolean;
}

export interface UserProfile {
  name: string;
  title: string;
  email: string;
  avatarUrl?: string;
  badges: string[];
}

export interface EnvironmentSettings {
  cloudSync: boolean;
  offlineMode: boolean;
  defaultPdfViewer: string;
}

export interface DataManagement {
  storageUsedGb: number;
}
