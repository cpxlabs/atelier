import { useCallback } from 'react';
import { Theme, InterfaceDynamics } from '../types';
import { THEMES } from '../themes';
import { useConfigStore } from '../store/useConfigStore';

export interface UseThemeReturn {
  themes: Theme[];
  activeTheme: Theme;
  activeThemeId: string;
  setTheme: (id: string) => void;
  dynamics: InterfaceDynamics;
  updateDynamics: (patch: Partial<InterfaceDynamics>) => void;
}

export function useTheme(): UseThemeReturn {
  const activeThemeId = useConfigStore((s) => s.activeThemeId);
  const setThemeId = useConfigStore((s) => s.setThemeId);
  const dynamics = useConfigStore((s) => s.dynamics);
  const storeDynamics = useConfigStore((s) => s.updateDynamics);

  const activeTheme: Theme =
    THEMES.find((t) => t.id === activeThemeId) ?? THEMES[0];

  const setTheme = useCallback(
    (id: string) => {
      if (THEMES.some((t) => t.id === id)) {
        setThemeId(id);
      }
    },
    [setThemeId],
  );

  const updateDynamics = useCallback(
    (patch: Partial<InterfaceDynamics>) => {
      storeDynamics(patch);
    },
    [storeDynamics],
  );

  return { themes: THEMES, activeTheme, activeThemeId, setTheme, dynamics, updateDynamics };
}
