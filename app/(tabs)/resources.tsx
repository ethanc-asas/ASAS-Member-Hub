import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Screen } from "../../components/Screen";
import { Card, Eyebrow } from "../../components/Ui";
import { colors } from "../../constants/theme";
import { sampleResources } from "../../data/sampleData";

const categories = [
  "ALL",
  "MEMBERSHIP",
  "PUBLICATIONS",
  "NEWS",
  "STUDENTS",
  "CAREERS",
  "EVENTS",
  "ADVOCACY",
  "FOUNDATION",
  "SUPPORT",
] as const;

export default function ResourcesScreen() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("ALL");
  const resources = useMemo(() => {
    const normalizedQuery = query.toLowerCase();

    return sampleResources.filter((resource) => {
      const matchesCategory =
        category === "ALL" || resource.category === category;
      const searchableText =
        `${resource.title} ${resource.description} ${resource.category}`.toLowerCase();

      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [query, category]);

  return (
    <Screen>
      <View style={styles.heading}>
        <Eyebrow>ASAS RESOURCES</Eyebrow>
        <Text style={styles.title}>Resources</Text>
        <Text style={styles.subtitle}>
          Find ASAS journals, member services, career information, and Society
          news.
        </Text>
      </View>

      <View style={styles.search}>
        <Ionicons name="search-outline" size={18} color={colors.muted} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search resources"
          placeholderTextColor="#8c9ba8"
          style={styles.searchInput}
          returnKeyType="search"
          accessibilityLabel="Search resources"
        />
        <Pressable
          onPress={() => setQuery("")}
          accessibilityLabel="Clear search"
        >
          <Ionicons
            name="close-circle"
            size={17}
            color={query ? colors.muted : "#c3cdd5"}
          />
        </Pressable>
      </View>

      <View style={styles.filters}>
        {categories.map((item) => (
          <Pressable
            key={item}
            onPress={() => setCategory(item)}
            style={[
              styles.filter,
              category === item && styles.filterActive,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                category === item && styles.filterTextActive,
              ]}
            >
              {item === "ALL" ? "All" : item[0] + item.slice(1).toLowerCase()}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.resultRow}>
        <Text style={styles.resultText}>{resources.length} RESOURCES</Text>
        <Text style={styles.resultHint}>Opens on the ASAS website</Text>
      </View>

      {resources.map((resource) => (
        <Pressable
          key={resource.id}
          onPress={() => Linking.openURL(resource.url)}
        >
          <Card style={styles.resource}>
            <View style={styles.resourceIcon}>
              <Ionicons
                name={resource.icon}
                size={21}
                color={colors.teal}
              />
            </View>
            <View style={styles.resourceCopy}>
              <Eyebrow>{resource.category}</Eyebrow>
              <Text style={styles.resourceTitle}>{resource.title}</Text>
              <Text style={styles.resourceDescription}>
                {resource.description}
              </Text>
            </View>
            <Ionicons name="open-outline" size={17} color="#8b9ba8" />
          </Card>
        </Pressable>
      ))}

      {resources.length === 0 && (
        <Card style={styles.empty}>
          <Ionicons name="search-outline" size={24} color={colors.teal} />
          <Text style={styles.emptyTitle}>No resources found</Text>
          <Text style={styles.resourceDescription}>
            Try a different search or category.
          </Text>
          <Pressable
            onPress={() => {
              setQuery("");
              setCategory("ALL");
            }}
          >
            <Text style={styles.reset}>Clear filters</Text>
          </Pressable>
        </Card>
      )}

      <Card style={styles.contact}>
        <View style={styles.contactIcon}>
          <Ionicons name="chatbubbles-outline" size={22} color="#fff" />
        </View>
        <View style={styles.contactCopy}>
          <Text style={styles.contactTitle}>Contact ASAS</Text>
          <Text style={styles.contactDescription}>
            For general questions, email asas@asas.org or call 217-356-9050.
          </Text>
          <Pressable
            onPress={() =>
              Linking.openURL("https://www.asas.org/about/contact-us")
            }
          >
            <Text style={styles.contactLink}>
              Contact information <Ionicons name="arrow-forward" size={12} />
            </Text>
          </Pressable>
        </View>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: { gap: 7 },
  title: {
    fontSize: 29,
    fontWeight: "900",
    letterSpacing: -0.7,
    color: colors.navy,
  },
  subtitle: { fontSize: 14.5, lineHeight: 20, color: colors.muted },
  search: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    gap: 9,
  },
  searchInput: {
    flex: 1,
    fontSize: 14.5,
    color: colors.text,
    paddingVertical: 0,
  },
  filters: { flexDirection: "row", flexWrap: "wrap", gap: 7 },
  filter: {
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 30,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterActive: { backgroundColor: colors.navy, borderColor: colors.navy },
  filterText: { fontSize: 12, fontWeight: "800", color: colors.muted },
  filterTextActive: { color: "#fff" },
  resultRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  resultText: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
    color: colors.teal,
  },
  resultHint: { fontSize: 11, color: colors.muted },
  resource: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    padding: 14,
  },
  resourceIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: colors.tealLight,
    alignItems: "center",
    justifyContent: "center",
  },
  resourceCopy: { flex: 1, gap: 5 },
  resourceTitle: { fontSize: 14.5, fontWeight: "900", color: colors.navy },
  resourceDescription: { fontSize: 12, lineHeight: 16, color: colors.muted },
  empty: { alignItems: "center", gap: 8, paddingVertical: 24 },
  emptyTitle: { fontSize: 16, fontWeight: "900", color: colors.navy },
  reset: { fontSize: 13, fontWeight: "900", color: colors.teal, marginTop: 3 },
  contact: {
    flexDirection: "row",
    gap: 12,
    backgroundColor: colors.navy,
    borderColor: colors.navy,
  },
  contactIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: "rgba(255,255,255,.13)",
    alignItems: "center",
    justifyContent: "center",
  },
  contactCopy: { flex: 1, gap: 5 },
  contactTitle: { fontSize: 15.5, fontWeight: "900", color: "#fff" },
  contactDescription: { fontSize: 13, lineHeight: 17, color: "#d2dfeb" },
  contactLink: {
    fontSize: 13,
    fontWeight: "900",
    color: "#b9e7ee",
    marginTop: 3,
  },
});
