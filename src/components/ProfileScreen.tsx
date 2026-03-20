import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import {
  Pencil,
  Lock,
  Settings2,
  Database,
  ChevronDown,
  CreditCard,
} from 'lucide-react-native';
import { styles, colors } from '../styles';
import { UserProfile, EnvironmentSettings, DataManagement } from '../types';
import { useConfigStore } from '../store/useConfigStore';

// ── Toggle Switch (reusable) ───────────────────────────────────────────────────

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

// ── Static Profile Data ────────────────────────────────────────────────────────

const PROFILE: UserProfile = {
  name: 'Alexander Vance',
  title: 'Postdoctoral Researcher \u2022 Comparative Literature',
  email: 'a.vance@university.edu',
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  badges: ['Pro Member', 'Verified Academic'],
};

const DATA: DataManagement = {
  storageUsedGb: 2.4,
};

// ── Avatar Section ─────────────────────────────────────────────────────────────

const AvatarSection: React.FC = () => (
  <View style={styles.profileAvatarContainer}>
    <View style={styles.profileAvatarWrap}>
      <Image
        source={{ uri: PROFILE.avatarUrl }}
        style={styles.profileAvatar}
      />
      <TouchableOpacity style={styles.profileAvatarEditBtn} activeOpacity={0.8}>
        <Pencil size={16} color={colors.white} />
      </TouchableOpacity>
    </View>
  </View>
);

// ── User Info Section ──────────────────────────────────────────────────────────

const UserInfoSection: React.FC = () => (
  <View>
    <Text style={styles.profileName}>{PROFILE.name}</Text>
    <Text style={styles.profileTitle}>{PROFILE.title}</Text>
    <View style={styles.profileBadgeRow}>
      {PROFILE.badges.map((badge, i) => (
        <View
          key={badge}
          style={[
            styles.profileBadge,
            { borderColor: i === 0 ? colors.black : colors.accent },
          ]}
        >
          <Text
            style={[
              styles.profileBadgeText,
              { color: i === 0 ? colors.black : colors.accent },
            ]}
          >
            {badge}
          </Text>
        </View>
      ))}
    </View>
  </View>
);

// ── Account Credentials Card ───────────────────────────────────────────────────

const AccountCredentialsCard: React.FC = () => (
  <View style={styles.profileCard}>
    <View style={styles.profileCardTitle}>
      <View style={styles.profileCardTitleIcon}>
        <CreditCard size={20} color={colors.black} />
      </View>
      <Text style={styles.profileCardTitleText}>Account Credentials</Text>
    </View>

    <Text style={styles.profileFieldLabel}>Email Address</Text>
    <View style={styles.profileFieldBox}>
      <Text style={styles.profileFieldValue}>{PROFILE.email}</Text>
      <Lock size={16} color={colors.muted} />
    </View>

    <Text style={styles.profileFieldLabel}>Password</Text>
    <View style={styles.profileFieldBox}>
      <Text style={styles.profileFieldValue}>{'\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022'}</Text>
      <Text style={styles.profileFieldAction}>Change</Text>
    </View>
  </View>
);

// ── Environment Card ───────────────────────────────────────────────────────────

interface EnvironmentCardProps {
  env: EnvironmentSettings;
  onToggle: (key: 'cloudSync' | 'offlineMode') => void;
}

const EnvironmentCard: React.FC<EnvironmentCardProps> = ({ env, onToggle }) => (
  <View style={styles.profileCard}>
    <View style={styles.profileCardTitle}>
      <View style={styles.profileCardTitleIcon}>
        <Settings2 size={20} color={colors.accent} />
      </View>
      <Text style={styles.profileCardTitleText}>Environment</Text>
    </View>

    {/* Cloud Sync */}
    <View style={styles.profileEnvRow}>
      <View style={styles.profileEnvTextWrap}>
        <Text style={styles.profileEnvLabel}>Cloud Sync</Text>
        <Text style={styles.profileEnvSublabel}>Auto-backup all annotations</Text>
      </View>
      <Toggle
        value={env.cloudSync}
        onToggle={() => onToggle('cloudSync')}
      />
    </View>

    {/* Offline Mode */}
    <View style={styles.profileEnvRow}>
      <View style={styles.profileEnvTextWrap}>
        <Text style={styles.profileEnvLabel}>Offline Mode</Text>
        <Text style={styles.profileEnvSublabel}>Keep current library local</Text>
      </View>
      <Toggle
        value={env.offlineMode}
        onToggle={() => onToggle('offlineMode')}
      />
    </View>

    {/* Default PDF Viewer */}
    <Text style={[styles.profileFieldLabel, { marginTop: 8 }]}>Default PDF Viewer</Text>
    <TouchableOpacity style={styles.profileSelectBox} activeOpacity={0.7}>
      <Text style={styles.profileSelectText}>{env.defaultPdfViewer}</Text>
      <ChevronDown size={18} color={colors.muted} />
    </TouchableOpacity>
  </View>
);

// ── Data Management Card ───────────────────────────────────────────────────────

const DataManagementCard: React.FC = () => (
  <View style={styles.profileCard}>
    <View style={styles.profileCardTitle}>
      <View style={styles.profileCardTitleIcon}>
        <Database size={20} color={colors.accent} />
      </View>
      <Text style={styles.profileCardTitleText}>Data Management</Text>
    </View>

    <Text style={styles.profileDataDesc}>
      Manage your local library storage and portable research data. Your library currently occupies{' '}
      <Text style={styles.profileDataBold}>{DATA.storageUsedGb} GB</Text> of local space.
    </Text>

    <TouchableOpacity style={styles.profileBtnPrimary} activeOpacity={0.8}>
      <Text style={styles.profileBtnPrimaryText}>Export Library (.json)</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.profileBtnOutline} activeOpacity={0.7}>
      <Text style={styles.profileBtnOutlineText}>Clear Local Cache</Text>
    </TouchableOpacity>
  </View>
);

// ── Deactivate Account Card ────────────────────────────────────────────────────

const DeactivateAccountCard: React.FC = () => (
  <View style={styles.profileDeactivateCard}>
    <Text style={styles.profileDeactivateTitle}>Deactivate Account</Text>
    <Text style={styles.profileDeactivateDesc}>
      This will archive your research notes and disable access to the Atelier network.
    </Text>
    <TouchableOpacity activeOpacity={0.7}>
      <Text style={styles.profileDeactivateBtn}>Begin Deactivation</Text>
    </TouchableOpacity>
  </View>
);

// ── Profile Screen ─────────────────────────────────────────────────────────────

type BooleanEnvKey = 'cloudSync' | 'offlineMode';

export const ProfileScreen: React.FC = () => {
  const env = useConfigStore((s) => s.env);
  const updateEnv = useConfigStore((s) => s.updateEnv);

  const handleEnvToggle = (key: BooleanEnvKey) => {
    updateEnv({ [key]: !env[key] });
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      <AvatarSection />
      <UserInfoSection />
      <AccountCredentialsCard />
      <EnvironmentCard env={env} onToggle={handleEnvToggle} />
      <DataManagementCard />
      <DeactivateAccountCard />
    </ScrollView>
  );
};
