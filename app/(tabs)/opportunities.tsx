import React, { useMemo, useState } from "react";
import type { ComponentProps } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Screen } from "../../components/Screen";
import { Card, Eyebrow } from "../../components/Ui";
import { SectionHeading } from "../../components/SectionHeading";
import { colors } from "../../constants/theme";
import { sampleOpportunities } from "../../data/sampleData";

type IconName = ComponentProps<typeof Ionicons>["name"];

const filters = ["All", "Awards", "Research", "Funding", "Students", "Careers"] as const;
type OpportunityFilter = (typeof filters)[number];

function matchesFilter(type: string, filter: OpportunityFilter) {
  switch (filter) {
    case "All":
      return true;
    case "Awards":
      return type === "AWARDS";
    case "Research":
      return type === "RESEARCH";
    case "Funding":
      return type === "FUNDING";
    case "Students":
      return type === "INTERNSHIP" || type === "STUDENT RECOGNITION";
    case "Careers":
      return type === "CAREER";
  }
}

export default function OpportunitiesScreen() {
  const [filter, setFilter] = useState<OpportunityFilter>("All");
  const items = useMemo(
    () => sampleOpportunities.filter((item) => matchesFilter(item.type, filter)),
    [filter],
  );

  return (
    <Screen>
      <View style={styles.heading}>
        <Eyebrow>AWARDS, FUNDING & CAREERS</Eyebrow>
        <Text style={styles.title}>Opportunities</Text>
        <Text style={styles.subtitle}>
          Browse awards, scholarships, internships, and career resources.
        </Text>
      </View>

      <Pressable
        onPress={() =>
          Linking.openURL(
            "https://www.asas.org/foundation/Inspire-Ignite-Invest/2027-dc-policy-intern-guidelines",
          )
        }
      >
        <Card style={styles.featured}>
          <View style={styles.featureIcon}>
            <Ionicons
              name="briefcase-outline"
              size={21}
              color="#b9e7ee"
            />
          </View>
          <Text style={styles.featureTitle}>
            D.C. Animal Agriculture Policy Internship
          </Text>
          <Text style={styles.featureSub}>Summer 2027 · Washington, D.C.</Text>
          <View style={styles.featureBottom}>
            <View style={styles.deadlineCopy}>
              <Text style={styles.deadlineLabel}>APPLICATION DEADLINE</Text>
              <Text style={styles.deadline}>November 6, 2026</Text>
            </View>
            <View style={styles.featureArrow}>
              <Ionicons name="open-outline" size={18} color={colors.navy} />
            </View>
          </View>
        </Card>
      </Pressable>

      <SectionHeading title="Browse by category" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filters}
      >
        {filters.map((item) => (
          <Pressable
            key={item}
            onPress={() => setFilter(item)}
            style={[
              styles.filter,
              filter === item && styles.filterActive,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                filter === item && styles.filterTextActive,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.listHead}>
        <Text style={styles.resultCount}>{items.length} OPPORTUNITIES</Text>
      </View>
      {items.map((item) => (
        <Pressable key={item.id} onPress={() => Linking.openURL(item.url)}>
          <Card style={styles.item}>
            <View style={styles.itemIcon}>
              <Ionicons
                name={iconFor(item.type)}
                size={20}
                color={colors.teal}
              />
            </View>
            <View style={styles.itemCopy}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDeadline}>{item.deadline}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={17}
              color="#8b9ba8"
            />
          </Card>
        </Pressable>
      ))}
    </Screen>
  );
}

function iconFor(type: string): IconName {
  switch (type) {
    case "INTERNSHIP":
    case "CAREER":
      return "briefcase-outline";
    case "AWARDS":
      return "trophy-outline";
    case "RESEARCH":
      return "flask-outline";
    case "FUNDING":
      return "wallet-outline";
    case "STUDENT RECOGNITION":
      return "school-outline";
    default:
      return "compass-outline";
  }
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
  featured: {
    backgroundColor: colors.navy,
    borderColor: colors.navy,
    padding: 18,
    gap: 10,
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "rgba(255,255,255,.12)",
    alignItems: "center",
    justifyContent: "center",
  },
  featureTitle: {
    fontSize: 19,
    lineHeight: 23,
    fontWeight: "900",
    color: "#fff",
  },
  featureSub: { fontSize: 13, color: "#d2dfeb" },
  featureBottom: {
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,.18)",
    paddingTop: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  deadlineCopy: { flex: 1, gap: 3 },
  deadlineLabel: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 0.8,
    color: "#b9e7ee",
  },
  deadline: { fontSize: 14, fontWeight: "800", color: "#fff", marginTop: 2 },
  featureArrow: {
    width: 35,
    height: 35,
    borderRadius: 11,
    backgroundColor: "#b9e7ee",
    alignItems: "center",
    justifyContent: "center",
  },
  filters: { gap: 7, paddingVertical: 2 },
  filter: {
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 30,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterActive: { backgroundColor: colors.navy, borderColor: colors.navy },
  filterText: { fontSize: 13, fontWeight: "800", color: colors.muted },
  filterTextActive: { color: "#fff" },
  listHead: { marginTop: -4 },
  resultCount: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
    color: colors.teal,
  },
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 11,
    padding: 13,
  },
  itemIcon: {
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: colors.tealLight,
    alignItems: "center",
    justifyContent: "center",
  },
  itemCopy: { flex: 1, gap: 5 },
  itemTitle: {
    fontSize: 14.5,
    lineHeight: 18,
    fontWeight: "900",
    color: colors.navy,
  },
  itemDeadline: { fontSize: 12, fontWeight: "900", color: colors.teal },
  itemDescription: { fontSize: 12, lineHeight: 15, color: colors.muted },
});
