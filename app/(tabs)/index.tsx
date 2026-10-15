import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { ComponentProps } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Screen } from "../../components/Screen";
import { Card, Eyebrow } from "../../components/Ui";
import { SectionHeading } from "../../components/SectionHeading";
import { colors } from "../../constants/theme";
import type { Announcement, EventItem, MemberProfile } from "../../data/sampleData";
import {
  getAnnouncements,
  getEvents,
  getMemberSummary,
} from "../../services/memberApi";

type IconName = ComponentProps<typeof Ionicons>["name"];

export default function HomeScreen() {
  const router = useRouter();
  const [member, setMember] = useState<MemberProfile | null>(null);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    Promise.all([getMemberSummary(), getAnnouncements(), getEvents()]).then(
      ([memberSummary, latestAnnouncements, upcomingEvents]) => {
        setMember(memberSummary);
        setAnnouncements(latestAnnouncements);
        setEvents(upcomingEvents.slice(0, 2));
      },
    );
  }, []);

  if (!member) {
    return (
      <Screen>
        <ActivityIndicator color={colors.teal} size="large" />
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={styles.header}>
        <View style={styles.greetingBlock}>
          <Text style={styles.brand}>
            ASAS <Text style={styles.brandAccent}>MEMBER HUB</Text>
          </Text>
          <Text style={styles.greeting}>Hi, {member.firstName}</Text>
          <Text style={styles.subtitle}>Where would you like to start?</Text>
        </View>
        <Pressable
          onPress={() => router.push("/(tabs)/membership")}
          style={styles.avatar}
          accessibilityLabel="Open your profile"
        >
          <Text style={styles.avatarText}>JB</Text>
        </Pressable>
      </View>

      <View style={styles.welcomeCard}>
        <View style={styles.welcomeIcon}>
          <Ionicons name="leaf-outline" size={20} color="#b9e7ee" />
        </View>
        <Text style={styles.welcomeTitle}>Welcome to ASAS</Text>
        <Text style={styles.welcomeCopy}>
          Find member services, upcoming meetings, research, and ways to get
          involved.
        </Text>
        <Pressable
          style={styles.welcomeButton}
          onPress={() => router.push("/(tabs)/resources")}
        >
          <Text style={styles.welcomeButtonText}>Browse resources</Text>
          <Ionicons name="arrow-forward" size={16} color={colors.navy} />
        </Pressable>
        <View style={styles.orb} />
      </View>

      <SectionHeading title="Quick links" />
      <View style={styles.actions}>
        <Action
          icon="id-card-outline"
          title="Membership & account"
          description="Your profile, dues, and benefits"
          onPress={() => router.push("/(tabs)/membership")}
        />
        <Action
          icon="calendar-outline"
          title="Meetings & events"
          description="Dates, registration, and deadlines"
          onPress={() => router.push("/(tabs)/events")}
        />
        <Action
          icon="ribbon-outline"
          title="Awards & scholarships"
          description="Funding, awards, and student programs"
          onPress={() => router.push("/(tabs)/opportunities")}
        />
        <Action
          icon="book-outline"
          title="Journals & research"
          description="ASAS publications and news"
          onPress={() => router.push("/(tabs)/resources")}
        />
      </View>

      <View style={styles.sectionTop}>
        <SectionHeading title="Upcoming meetings" />
        <Pressable onPress={() => router.push("/(tabs)/events")}>
          <Text style={styles.viewAll}>View all</Text>
        </Pressable>
      </View>
      {events.map((event) => (
        <Pressable key={event.id} onPress={() => Linking.openURL(event.url)}>
          <Card style={styles.eventCard}>
            <View style={styles.dateBlock}>
              <Text style={styles.dateMonth}>
                {event.id === "southern-2027" ? "FEB" : "JUN"}
              </Text>
              <Text style={styles.dateDay}>
                {event.id === "southern-2027" ? "07" : "27"}
              </Text>
            </View>
            <View style={styles.eventCopy}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventMeta}>{event.dateLabel}</Text>
              <Text style={styles.eventLocation}>{event.location}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#8b9ba8" />
          </Card>
        </Pressable>
      ))}

      <View style={styles.sectionTop}>
        <SectionHeading title="News & deadlines" />
        <Pressable onPress={() => router.push("/(tabs)/opportunities")}>
          <Text style={styles.viewAll}>More</Text>
        </Pressable>
      </View>
      {announcements.slice(0, 1).map((item) => (
        <Pressable key={item.id} onPress={() => Linking.openURL(item.url)}>
          <Card style={styles.updateCard}>
            <View style={styles.updateIcon}>
              <Ionicons name="sparkles-outline" size={19} color={colors.teal} />
            </View>
            <View style={styles.updateCopy}>
              <Eyebrow>{item.label}</Eyebrow>
              <Text style={styles.updateTitle}>{item.title}</Text>
              <Text style={styles.updateMeta}>{item.dateLabel}</Text>
            </View>
            <Ionicons name="open-outline" size={17} color={colors.teal} />
          </Card>
        </Pressable>
      ))}
    </Screen>
  );
}

interface ActionProps {
  icon: IconName;
  title: string;
  description: string;
  onPress: () => void;
}

function Action({ icon, title, description, onPress }: ActionProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.action, pressed && styles.actionPressed]}
    >
      <View style={styles.actionIcon}>
        <Ionicons name={icon} size={21} color={colors.teal} />
      </View>
      <View style={styles.actionCopy}>
        <Text style={styles.actionTitle}>{title}</Text>
        <Text style={styles.actionDescription}>{description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={17} color="#8b9ba8" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", gap: 12 },
  greetingBlock: { flex: 1, gap: 4 },
  brand: {
    fontSize: 13,
    letterSpacing: 1.4,
    fontWeight: "900",
    color: colors.navy,
  },
  brandAccent: { color: colors.teal, fontWeight: "800" },
  greeting: {
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: -0.8,
    color: colors.navy,
    marginTop: 5,
  },
  subtitle: { fontSize: 14.5, color: colors.muted },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 17,
    backgroundColor: colors.navy,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { color: "#fff", fontSize: 16, fontWeight: "900" },
  welcomeCard: {
    backgroundColor: colors.navy,
    borderRadius: 23,
    padding: 20,
    gap: 10,
    overflow: "hidden",
  },
  welcomeIcon: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: "rgba(255,255,255,.12)",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeTitle: {
    fontSize: 22,
    lineHeight: 27,
    fontWeight: "900",
    letterSpacing: -0.4,
    color: "#fff",
  },
  welcomeCopy: {
    fontSize: 14,
    lineHeight: 18,
    color: "#d2e0ed",
    maxWidth: 300,
  },
  welcomeButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#b9e7ee",
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 11,
    marginTop: 3,
  },
  welcomeButtonText: { fontSize: 14, fontWeight: "900", color: colors.navy },
  orb: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 22,
    borderColor: "rgba(255,255,255,.045)",
    right: -70,
    bottom: -80,
  },
  actions: { gap: 9 },
  action: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 13,
    minHeight: 72,
  },
  actionPressed: { opacity: 0.75 },
  actionIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: colors.tealLight,
    alignItems: "center",
    justifyContent: "center",
  },
  actionCopy: { flex: 1, gap: 4 },
  actionTitle: { fontSize: 14.5, fontWeight: "900", color: colors.navy },
  actionDescription: { fontSize: 13, color: colors.muted },
  sectionTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewAll: { fontSize: 13, fontWeight: "900", color: colors.teal },
  eventCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 13,
  },
  dateBlock: {
    width: 48,
    height: 54,
    backgroundColor: colors.tealLight,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  dateMonth: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 0.8,
    color: colors.teal,
  },
  dateDay: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.navy,
    marginTop: 1,
  },
  eventCopy: { flex: 1, gap: 4 },
  eventTitle: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "900",
    color: colors.navy,
  },
  eventMeta: { fontSize: 13, fontWeight: "800", color: colors.text },
  eventLocation: { fontSize: 12, lineHeight: 14, color: colors.muted },
  updateCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
  },
  updateIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: colors.tealLight,
    alignItems: "center",
    justifyContent: "center",
  },
  updateCopy: { flex: 1, gap: 5 },
  updateTitle: {
    fontSize: 14.5,
    lineHeight: 18,
    fontWeight: "900",
    color: colors.navy,
  },
  updateMeta: { fontSize: 12, fontWeight: "800", color: colors.muted },
});
