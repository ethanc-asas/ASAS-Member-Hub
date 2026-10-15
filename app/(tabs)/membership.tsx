import React from "react";
import type { ComponentProps } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Screen } from "../../components/Screen";
import { Card, Eyebrow } from "../../components/Ui";
import { SectionHeading } from "../../components/SectionHeading";
import { colors } from "../../constants/theme";
import { memberProfile, membershipTypes } from "../../data/sampleData";

type IconName = ComponentProps<typeof Ionicons>["name"];

export default function MembershipScreen() {
  return (
    <Screen>
      <View style={styles.heading}>
        <Eyebrow>Membership & account</Eyebrow>
        <Text style={styles.title}>Membership</Text>
        <Text style={styles.subtitle}>
          View member services and compare membership categories and dues.
        </Text>
      </View>

      <Card style={styles.profile}>
        <View style={styles.profileTop}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JB</Text>
          </View>
          <View style={styles.profileCopy}>
            <Text style={styles.name}>{memberProfile.fullName}</Text>
            <Text style={styles.email}>{memberProfile.email}</Text>
          </View>
          <Ionicons
            name="person-circle-outline"
            size={26}
            color={colors.teal}
          />
        </View>
        <View style={styles.divider} />
        <Pressable
          style={styles.primaryButton}
          onPress={() => Linking.openURL("https://members.asas.org/index.html")}
        >
          <Ionicons name="person-outline" size={17} color="#fff" />
          <Text style={styles.primaryText}>Open member portal</Text>
          <Ionicons name="open-outline" size={16} color="#fff" />
        </Pressable>
      </Card>

      <SectionHeading title="Member benefits" />
      <Card style={styles.benefit}>
        <Benefit
          icon="book-outline"
          title="Research & publications"
          body="Explore Journal of Animal Science, Translational Animal Science, and Animal Frontiers."
        />
        <Benefit
          icon="people-outline"
          title="Professional connections"
          body="Meet colleagues at ASAS meetings and take part in committees and Society leadership."
        />
        <Benefit
          icon="ribbon-outline"
          title="Awards & travel support"
          body="See Society and Foundation awards, student competitions, and travel support."
        />
        <Benefit
          icon="briefcase-outline"
          title="Career development"
          body="Visit the Career Center and find professional development and student resources."
        />
      </Card>

      <SectionHeading title="Membership options" />
      <Text style={styles.sectionIntro}>Membership categories and annual dues</Text>
      {membershipTypes.map((membership) => (
        <Card key={membership.name} style={styles.rateRow}>
          <View style={styles.rateCopy}>
            <Text style={styles.rateName}>{membership.name}</Text>
            <Text style={styles.rateNote}>{membership.note}</Text>
          </View>
          <Text style={styles.price}>{membership.price}</Text>
        </Card>
      ))}

      <Pressable
        style={styles.secondaryButton}
        onPress={() => Linking.openURL("https://www.asas.org/join-asas")}
      >
        <Text style={styles.secondaryText}>Membership details</Text>
        <Ionicons name="arrow-forward" size={15} color={colors.teal} />
      </Pressable>
    </Screen>
  );
}

interface BenefitProps {
  icon: IconName;
  title: string;
  body: string;
}

function Benefit({ icon, title, body }: BenefitProps) {
  return (
    <View style={styles.benefitRow}>
      <View style={styles.benefitIcon}>
        <Ionicons name={icon} size={19} color={colors.teal} />
      </View>
      <View style={styles.benefitCopy}>
        <Text style={styles.benefitTitle}>{title}</Text>
        <Text style={styles.benefitBody}>{body}</Text>
      </View>
    </View>
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
  profile: { gap: 14 },
  profileTop: { flexDirection: "row", alignItems: "center", gap: 11 },
  avatar: {
    width: 49,
    height: 49,
    borderRadius: 17,
    backgroundColor: colors.navy,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { fontSize: 18, fontWeight: "900", color: "#fff" },
  profileCopy: { flex: 1, gap: 4 },
  name: { fontSize: 17, fontWeight: "900", color: colors.navy },
  email: { fontSize: 13, color: colors.muted },
  divider: { height: 1, backgroundColor: colors.border },
  primaryButton: {
    height: 45,
    backgroundColor: colors.navy,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  primaryText: { fontSize: 14, fontWeight: "900", color: "#fff" },
  benefit: { gap: 16 },
  benefitRow: { flexDirection: "row", alignItems: "flex-start", gap: 11 },
  benefitIcon: {
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: colors.tealLight,
    alignItems: "center",
    justifyContent: "center",
  },
  benefitCopy: { flex: 1, gap: 4 },
  benefitTitle: { fontSize: 14.5, fontWeight: "900", color: colors.navy },
  benefitBody: { fontSize: 13, lineHeight: 17, color: colors.muted },
  sectionIntro: {
    fontSize: 13,
    lineHeight: 17,
    color: colors.muted,
    marginTop: -6,
  },
  rateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 14,
  },
  rateCopy: { flex: 1, gap: 4 },
  rateName: { fontSize: 14.5, fontWeight: "900", color: colors.navy },
  rateNote: { fontSize: 12, lineHeight: 15, color: colors.muted, flexShrink: 1 },
  price: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.teal,
    textAlign: "right",
  },
  secondaryButton: {
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#cbdfe7",
    backgroundColor: "#fff",
  },
  secondaryText: { fontSize: 14, fontWeight: "900", color: colors.teal },
});
