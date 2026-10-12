import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Screen } from "../../components/Screen";
import { Card, Eyebrow } from "../../components/Ui";
import { SectionHeading } from "../../components/SectionHeading";
import { colors } from "../../constants/theme";
import { sampleEvents } from "../../data/sampleData";

const deadlines = [
  { date: "Oct 30, 2026", title: "Southern Section early-bird registration", url: "https://members.asas.org/events/2027-southern-section-annual-meeting/580/" },
  { date: "Nov 6, 2026", title: "D.C. Animal Agriculture Policy Internship", url: "https://www.asas.org/foundation/Inspire-Ignite-Invest/2027-dc-policy-intern-guidelines" },
  { date: "Jan 7, 2027", title: "National Award nominations", url: "https://www.asas.org/about/national-awards" },
  { date: "Feb 16, 2027 · 3 p.m. CT", title: "Annual Meeting abstract submission", url: "https://www.asas.org/meetings/annual-2027/abstract-and-poster-information" },
  { date: "Jun 7, 2027", title: "Annual Meeting housing deadline", url: "https://www.asas.org/meetings/annual-2027" },
];

export default function EventsScreen(){
  const [view,setView]=useState<"meetings"|"deadlines">("meetings");
  return <Screen>
    <View style={s.heading}><Eyebrow>PLAN AHEAD</Eyebrow><Text style={s.title}>Events & dates</Text><Text style={s.subtitle}>Find a meeting or check what’s coming due.</Text></View>
    <View style={s.switcher}>
      <Pressable onPress={()=>setView("meetings")} style={[s.switchOption,view==="meetings"&&s.switchActive]}><Ionicons name="calendar-outline" size={16} color={view==="meetings"?"#fff":colors.muted}/><Text style={[s.switchText,view==="meetings"&&s.switchTextActive]}>Meetings</Text></Pressable>
      <Pressable onPress={()=>setView("deadlines")} style={[s.switchOption,view==="deadlines"&&s.switchActive]}><Ionicons name="alarm-outline" size={16} color={view==="deadlines"?"#fff":colors.muted}/><Text style={[s.switchText,view==="deadlines"&&s.switchTextActive]}>Deadlines</Text></Pressable>
    </View>
    {view==="meetings" ? <>
      <SectionHeading title="Upcoming meetings"/>
      {sampleEvents.map((event,index)=><Pressable key={event.id} onPress={()=>Linking.openURL(event.url)}><Card style={s.event}>
        <View style={s.eventTop}><View style={s.dateIcon}><Ionicons name="calendar-outline" size={20} color={colors.teal}/></View><View style={{flex:1,gap:4}}><Text style={s.eventTitle}>{event.title}</Text><Text style={s.eventDate}>{event.dateLabel}</Text></View><Ionicons name="arrow-up-right" size={17} color={colors.teal}/></View>
        <Text style={s.eventLocation}>{event.location}</Text>
        {index===0&&<View style={s.eventFooter}><Text style={s.footerLabel}>EARLY-BIRD REGISTRATION</Text><Text style={s.footerValue}>Ends October 30, 2026</Text></View>}
      </Card></Pressable>)}
    </> : <>
      <SectionHeading title="Important deadlines"/>
      {deadlines.map((item)=><Pressable key={item.title} onPress={()=>Linking.openURL(item.url)}><Card style={s.deadlineCard}><View style={s.deadlineIcon}><Ionicons name="time-outline" size={19} color={colors.teal}/></View><View style={{flex:1,gap:4}}><Text style={s.deadlineDate}>{item.date}</Text><Text style={s.deadlineTitle}>{item.title}</Text></View><Ionicons name="arrow-up-right" size={16} color={colors.teal}/></Card></Pressable>)}
    </>}
  </Screen>
}
const s=StyleSheet.create({heading:{gap:7},title:{fontSize:29,fontWeight:'900',letterSpacing:-.7,color:colors.navy},subtitle:{fontSize:13,lineHeight:20,color:colors.muted},switcher:{flexDirection:'row',padding:4,borderRadius:14,backgroundColor:'#e9eff4',gap:4},switchOption:{flex:1,minHeight:42,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:7,borderRadius:11},switchActive:{backgroundColor:colors.navy},switchText:{fontSize:12,fontWeight:'800',color:colors.muted},switchTextActive:{color:'#fff'},event:{gap:11,padding:15},eventTop:{flexDirection:'row',alignItems:'center',gap:11},dateIcon:{width:43,height:43,borderRadius:13,backgroundColor:colors.tealLight,alignItems:'center',justifyContent:'center'},eventTitle:{fontSize:14,lineHeight:19,fontWeight:'900',color:colors.navy},eventDate:{fontSize:11,fontWeight:'800',color:colors.teal},eventLocation:{fontSize:11,lineHeight:16,color:colors.muted},eventFooter:{borderTopWidth:1,borderTopColor:colors.border,paddingTop:10,gap:3},footerLabel:{fontSize:8,fontWeight:'900',letterSpacing:.8,color:colors.muted},footerValue:{fontSize:11,fontWeight:'800',color:colors.text},deadlineCard:{flexDirection:'row',alignItems:'center',gap:12,padding:14},deadlineIcon:{width:40,height:40,borderRadius:12,backgroundColor:colors.tealLight,alignItems:'center',justifyContent:'center'},deadlineDate:{fontSize:10,fontWeight:'900',color:colors.teal},deadlineTitle:{fontSize:12,lineHeight:17,fontWeight:'800',color:colors.navy}});
