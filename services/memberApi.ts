/** Local content service. Member profile details are currently supplied locally. */
import {
  announcements,
  memberProfile,
  sampleEvents,
  sampleOpportunities,
  sampleResources,
  type Announcement,
  type EventItem,
  type MemberProfile,
  type OpportunityItem,
  type ResourceItem,
} from "../data/sampleData";

export async function getMemberSummary(): Promise<MemberProfile> {
  return memberProfile;
}

export async function getAnnouncements(): Promise<Announcement[]> {
  return announcements;
}

export async function getEvents(): Promise<EventItem[]> {
  return sampleEvents;
}

export async function getOpportunities(): Promise<OpportunityItem[]> {
  return sampleOpportunities;
}

export async function getResources(): Promise<ResourceItem[]> {
  return sampleResources;
}
