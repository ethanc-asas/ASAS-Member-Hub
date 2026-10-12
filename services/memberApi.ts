/** Local app content service. Member profile details are currently supplied locally. */
import { announcements, memberProfile, sampleEvents, sampleOpportunities, sampleResources } from "../data/sampleData";
export async function getMemberSummary() { return memberProfile; }
export async function getAnnouncements() { return announcements; }
export async function getEvents() { return sampleEvents; }
export async function getOpportunities() { return sampleOpportunities; }
export async function getResources() { return sampleResources; }
