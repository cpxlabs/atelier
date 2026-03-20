import { StyleSheet } from 'react-native';

export const colors = {
  background: '#f5f5f0',
  surface: '#ffffff',
  surfaceLight: '#f0efe9',
  primary: '#1a1a1a',
  secondary: '#6b6b6b',
  accent: '#5b6abf',
  accentLight: '#e8e6f0',
  teal: '#6b9e9e',
  muted: '#999999',
  border: '#e8e8e3',
  white: '#ffffff',
  black: '#1a1a1a',
};

export const styles = StyleSheet.create({
  /* ── Layout ── */
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },

  /* ── Header ── */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: colors.white,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburger: {
    marginRight: 14,
  },
  logo: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
    letterSpacing: -0.3,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  langPill: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  langText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.secondary,
    marginLeft: 4,
    marginRight: 2,
  },

  /* ── Section ── */
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.accent,
    marginRight: 4,
  },

  /* ── Category Grid ── */
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    minHeight: 120,
    justifyContent: 'space-between',
  },
  categoryIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 2,
  },
  categorySubtitle: {
    fontSize: 12,
    color: colors.secondary,
  },

  /* ── Recent Library Cards ── */
  libraryScroll: {
    paddingLeft: 20,
    paddingRight: 4,
  },
  paperCard: {
    width: 260,
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  paperImageWrap: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  paperBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  paperBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.white,
  },
  paperBody: {
    padding: 14,
  },
  paperTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 4,
    lineHeight: 22,
  },
  paperDesc: {
    fontSize: 13,
    color: colors.secondary,
    lineHeight: 18,
    marginBottom: 12,
    fontStyle: 'italic',
  },
  paperMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paperMetaDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.secondary,
    marginRight: 8,
  },
  paperMetaText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.secondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  /* ── Active Notebooks ── */
  notebookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginBottom: 2,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 14,
  },
  notebookDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 14,
  },
  notebookInfo: {
    flex: 1,
  },
  notebookTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 3,
  },
  notebookMeta: {
    fontSize: 12,
    color: colors.muted,
  },
  notebookMenu: {
    padding: 4,
  },

  /* ── Bottom Nav ── */
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingBottom: 14,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    minWidth: 60,
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '600',
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  navLabelActive: {
    color: colors.black,
  },
  navLabelInactive: {
    color: colors.muted,
  },
  fabButton: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },

  /* ── Theme Screen ── */
  themeScreenHeading: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.black,
    letterSpacing: -0.5,
    marginBottom: 10,
  },
  themeScreenSubtitle: {
    fontSize: 14,
    fontStyle: 'italic',
    color: colors.secondary,
    lineHeight: 20,
    marginBottom: 28,
  },
  themeSectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: colors.muted,
    textTransform: 'uppercase',
    marginBottom: 14,
  },
  themeCardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  themeCardWrapper: {
    width: '48%',
    marginBottom: 20,
  },
  themeCard: {
    borderRadius: 12,
    padding: 10,
    height: 140,
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'transparent',
    overflow: 'hidden',
  },
  themeCardSelected: {
    borderColor: colors.black,
  },
  themeCardDots: {
    flexDirection: 'row',
  },
  themeCardDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  themeCardLines: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 8,
    gap: 6,
  },
  themeCardLine: {
    height: 6,
    borderRadius: 3,
  },
  themeCardLineShort: {
    width: '55%',
  },
  themeCardCheckmark: {
    alignSelf: 'flex-end',
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeCardName: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.black,
    marginTop: 8,
  },

  /* ── Interface Dynamics ── */
  dynamicsCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginBottom: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  dynamicsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
    paddingVertical: 18,
  },
  dynamicsDivider: {
    height: 1,
    backgroundColor: colors.border,
  },
  dynamicsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
  },
  dynamicsItemText: {
    flex: 1,
    marginRight: 16,
  },
  dynamicsItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 3,
  },
  dynamicsItemDesc: {
    fontSize: 12,
    color: colors.secondary,
    lineHeight: 17,
  },
  toggleTrack: {
    width: 46,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.border,
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleTrackActive: {
    backgroundColor: colors.accent,
  },
  toggleThumb: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleThumbActive: {
    alignSelf: 'flex-end',
  },
  sliderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderLabel: {
    fontSize: 11,
    color: colors.secondary,
    width: 54,
  },
  sliderLabelRight: {
    textAlign: 'right',
  },
  sliderTrack: {
    flex: 1,
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    marginHorizontal: 8,
    position: 'relative',
    justifyContent: 'center',
  },
  sliderFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.accent,
    borderRadius: 2,
  },
  sliderThumb: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.accent,
    position: 'absolute',
    marginTop: -7,
    top: 0,
  },

  /* ── Profile Screen ── */
  profileAvatarContainer: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 20,
  },
  profileAvatarWrap: {
    width: 120,
    height: 120,
    borderRadius: 60,
    position: 'relative',
  },
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.surfaceLight,
  },
  profileAvatarEditBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.background,
  },
  profileName: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.black,
    textAlign: 'center',
    marginBottom: 4,
  },
  profileTitle: {
    fontSize: 15,
    fontStyle: 'italic',
    color: colors.secondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 14,
    paddingHorizontal: 40,
  },
  profileBadgeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 28,
  },
  profileBadge: {
    borderWidth: 1.5,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  profileBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },

  /* ── Profile Cards ── */
  profileCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 22,
    marginHorizontal: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  profileCardTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileCardTitleIcon: {
    marginRight: 10,
  },
  profileCardTitleText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
  },

  /* ── Credential Fields ── */
  profileFieldLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    color: colors.muted,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  profileFieldBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginBottom: 16,
  },
  profileFieldValue: {
    fontSize: 15,
    color: colors.black,
    flex: 1,
  },
  profileFieldAction: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.accent,
  },

  /* ── Environment Section ── */
  profileEnvRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  profileEnvTextWrap: {
    flex: 1,
    marginRight: 16,
  },
  profileEnvLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 2,
  },
  profileEnvSublabel: {
    fontSize: 12,
    color: colors.secondary,
  },
  profileSelectBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginTop: 8,
  },
  profileSelectText: {
    fontSize: 14,
    color: colors.black,
    flex: 1,
  },

  /* ── Data Management ── */
  profileDataDesc: {
    fontSize: 14,
    color: colors.secondary,
    lineHeight: 21,
    marginBottom: 18,
  },
  profileDataBold: {
    fontWeight: '700',
    color: colors.black,
  },
  profileBtnPrimary: {
    backgroundColor: colors.accent,
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  profileBtnPrimaryText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.white,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  profileBtnOutline: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  profileBtnOutlineText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.black,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },

  /* ── Deactivate Account ── */
  profileDeactivateCard: {
    backgroundColor: '#fdf2f2',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 22,
    marginHorizontal: 20,
    marginBottom: 32,
  },
  profileDeactivateTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#c53030',
    marginBottom: 8,
  },
  profileDeactivateDesc: {
    fontSize: 14,
    color: colors.secondary,
    lineHeight: 21,
    marginBottom: 16,
  },
  profileDeactivateBtn: {
    fontSize: 13,
    fontWeight: '700',
    color: '#c53030',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});
