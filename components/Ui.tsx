import React from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors, spacing } from "../constants/theme";

export function Card({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[styles.card, style]}>{children}</View>;
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <Text style={styles.eyebrow}>{children}</Text>;
}
export function Pill({ children, tone = "teal" }: { children: React.ReactNode; tone?: "teal" | "green" | "amber" | "navy" }) {
  const toneStyle = tone === "green" ? styles.pillGreen : tone === "amber" ? styles.pillAmber : tone === "navy" ? styles.pillNavy : styles.pillTeal;
  return <View style={[styles.pill, toneStyle]}><Text style={styles.pillText}>{children}</Text></View>;
}
export function ActionRow({ title, subtitle, icon, onPress }: { title: string; subtitle: string; icon: string; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} disabled={!onPress} style={({ pressed }) => [styles.actionRow, pressed && { opacity: 0.7 }]}>
      <View style={styles.iconBox}><Text style={styles.iconText}>{icon}</Text></View>
      <View style={styles.actionCopy}><Text style={styles.actionTitle}>{title}</Text><Text style={styles.actionSubtitle}>{subtitle}</Text></View>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  card: { backgroundColor: colors.surface, borderRadius: 18, borderWidth: 1, borderColor: colors.border, padding: spacing.lg, gap: spacing.md },
  eyebrow: { fontSize: 10, letterSpacing: 1.2, fontWeight: "800", color: colors.teal },
  pill: { alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999 },
  pillTeal: { backgroundColor: colors.tealLight }, pillGreen: { backgroundColor: "#e7f5ed" }, pillAmber: { backgroundColor: colors.warningLight }, pillNavy: { backgroundColor: "#eaf0f7" },
  pillText: { fontSize: 10, fontWeight: "800", color: colors.navy },
  actionRow: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 4 },
  iconBox: { width: 42, height: 42, borderRadius: 13, alignItems: "center", justifyContent: "center", backgroundColor: colors.tealLight },
  iconText: { fontSize: 20, fontWeight: "700", color: colors.teal },
  actionCopy: { flex: 1, gap: 3 }, actionTitle: { color: colors.text, fontSize: 14, fontWeight: "700" },
  actionSubtitle: { color: colors.muted, fontSize: 12, lineHeight: 17 }, chevron: { fontSize: 25, color: "#8a9aa8", marginLeft: 2 },
});
