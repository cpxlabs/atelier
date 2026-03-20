import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { InterfaceDynamics, EnvironmentSettings } from '../types';
import { DEFAULT_THEME_ID } from '../themes';

// ── Defaults ──────────────────────────────────────────────────────────────────

const DEFAULT_DYNAMICS: InterfaceDynamics = {
  autoFocusMode: true,
  typographyScaling: 1,
  academicAccents: false,
};

const DEFAULT_ENV: EnvironmentSettings = {
  cloudSync: true,
  offlineMode: false,
  defaultPdfViewer: 'Atelier Focus Reader (Recommended)',
};

// ── Store Shape ───────────────────────────────────────────────────────────────

export interface ConfigState {
  // Theme
  activeThemeId: string;
  setThemeId: (id: string) => void;

  // Interface dynamics
  dynamics: InterfaceDynamics;
  updateDynamics: (patch: Partial<InterfaceDynamics>) => void;

  // Environment / profile settings
  env: EnvironmentSettings;
  updateEnv: (patch: Partial<EnvironmentSettings>) => void;
}

// ── Store ─────────────────────────────────────────────────────────────────────

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      activeThemeId: DEFAULT_THEME_ID,
      setThemeId: (id) => set({ activeThemeId: id }),

      dynamics: DEFAULT_DYNAMICS,
      updateDynamics: (patch) =>
        set((state) => ({ dynamics: { ...state.dynamics, ...patch } })),

      env: DEFAULT_ENV,
      updateEnv: (patch) =>
        set((state) => ({ env: { ...state.env, ...patch } })),
    }),
    {
      name: 'atelier-config',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
