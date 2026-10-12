import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/theme";

export function SectionHeading({ title, action }: { title: string; action?: string }) {
  return <View style={styles.row}><Text style={styles.title}>{title}</Text>{action ? <Text style={styles.action}>{action}</Text> : null}</View>;
}
const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 12 },
  title: { fontSize: 19, fontWeight: "800", color: colors.navy },
  action: { fontSize: 12, fontWeight: "700", color: colors.teal },
});
