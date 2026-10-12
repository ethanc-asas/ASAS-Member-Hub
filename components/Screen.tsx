import React, { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { colors, spacing } from "../constants/theme";

export function Screen({ children, scroll = true }: PropsWithChildren<{ scroll?: boolean }>) {
  return (
    <SafeAreaView style={styles.safe}>
      {scroll ? (
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : <View style={styles.content}>{children}</View>}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingTop: spacing.md, paddingBottom: 36, gap: spacing.lg },
});
