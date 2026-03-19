import { useState, useCallback } from 'react';
import { Theme, InterfaceDynamics } from '../types';
import { THEMES, DEFAULT_THEME_ID } from '../themes';

export interface UseThemeReturn {
  themes: Theme[];
  activeTheme: Theme;
  activeThemeId: string;
  setTheme: (id: string) => void;
  dynamics: InterfaceDynamics;
  updateDynamics: (patch: Partial<InterfaceDynamics>) => void;
}

const DEFAULT_DYNAMICS: InterfaceDynamics = {
  autoFocusMode: true,
  typographyScaling: 1,
  academicAccents: false,
};

export function useTheme(): UseThemeReturn {
  const [activeThemeId, setActiveThemeId] = useState<string>(DEFAULT_THEME_ID);
  const [dynamics, setDynamics] = useState<InterfaceDynamics>(DEFAULT_DYNAMICS);

  const activeTheme: Theme =
    THEMES.find((t) => t.id === activeThemeId) ?? THEMES[0];

  const setTheme = useCallback((id: string) => {
    if (THEMES.some((t) => t.id === id)) {
      setActiveThemeId(id);
    }
  }, []);

  const updateDynamics = useCallback((patch: Partial<InterfaceDynamics>) => {
    setDynamics((prev) => ({ ...prev, ...patch }));
  }, []);

  return { themes: THEMES, activeTheme, activeThemeId, setTheme, dynamics, updateDynamics };
}
