import React, { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Screen } from "../../components/Screen";
import { Card, Eyebrow } from "../../components/Ui";
import { SectionHeading } from "../../components/SectionHeading";
import { colors } from "../../constants/theme";
import { getAnnouncements, getEvents, getMemberSummary } from "../../services/memberApi";

export default function HomeScreen() {
  const router = useRouter();
  const [member,setMember]=useState<any>(null); const [announcements,setAnnouncements]=useState<any[]>([]); const [events,setEvents]=useState<any[]>([]);
  useEffect(()=>{Promise.all([getMemberSummary(),getAnnouncements(),getEvents()]).then(([m,a,e])=>{setMember(m);setAnnouncements(a);setEvents(e.slice(0,2));});},[]);
  if(!member) return <Screen><ActivityIndicator color={colors.teal} size="large"/></Screen>;
  return <Screen>
    <View style={s.header}>
      <View style={{flex:1,gap:4}}><Text style={s.brand}>ASAS <Text style={s.brandAccent}>MEMBER HUB</Text></Text><Text style={s.greeting}>Hi, {member.firstName}</Text><Text style={s.subtitle}>What can we help you with today?</Text></View>
      <Pressable onPress={()=>router.push("/(tabs)/membership")} style={s.avatar} accessibilityLabel="Open your profile"><Text style={s.avatarText}>JB</Text></Pressable>
    </View>

    <View style={s.welcomeCard}><View style={s.welcomeIcon}><Ionicons name="leaf-outline" size={20} color="#b9e7ee"/></View><Text style={s.welcomeTitle}>Your ASAS community</Text><Text style={s.welcomeCopy}>Stay connected to the science, people, and opportunities advancing animal agriculture.</Text><Pressable style={s.welcomeButton} onPress={()=>router.push("/(tabs)/resources")}><Text style={s.welcomeButtonText}>Explore ASAS</Text><Ionicons name="arrow-forward" size={16} color={colors.navy}/></Pressable><View style={s.orb}/></View>

    <SectionHeading title="What would you like to do?"/>
    <View style={s.actions}>
      <Action icon="id-card-outline" title="Manage membership" description="Profile, benefits & dues" onPress={()=>router.push("/(tabs)/membership")}/>
      <Action icon="calendar-outline" title="Find an event" description="Meetings & important dates" onPress={()=>router.push("/(tabs)/events")}/>
      <Action icon="ribbon-outline" title="Awards & funding" description="Scholarships and opportunities" onPress={()=>router.push("/(tabs)/opportunities")}/>
      <Action icon="book-outline" title="Explore research" description="Journals, news & resources" onPress={()=>router.push("/(tabs)/resources")}/>
    </View>

    <View style={s.sectionTop}><SectionHeading title="Coming up"/><Pressable onPress={()=>router.push("/(tabs)/events")}><Text style={s.viewAll}>View all</Text></Pressable></View>
    {events.map(event=><Pressable key={event.id} onPress={()=>Linking.openURL(event.url)}><Card style={s.eventCard}><View style={s.dateBlock}><Text style={s.dateMonth}>{event.id==="southern-2027"?"FEB":"JUN"}</Text><Text style={s.dateDay}>{event.id==="southern-2027"?"07":"27"}</Text></View><View style={{flex:1,gap:4}}><Text style={s.eventTitle}>{event.title}</Text><Text style={s.eventMeta}>{event.dateLabel}</Text><Text style={s.eventLocation}>{event.location}</Text></View><Ionicons name="chevron-forward" size={18} color="#8b9ba8"/></Card></Pressable>)}

    <View style={s.sectionTop}><SectionHeading title="Worth a look"/><Pressable onPress={()=>router.push("/(tabs)/opportunities")}><Text style={s.viewAll}>More</Text></Pressable></View>
    {announcements.slice(0,1).map(item=><Pressable key={item.id} onPress={()=>Linking.openURL(item.url)}><Card style={s.updateCard}><View style={s.updateIcon}><Ionicons name="sparkles-outline" size={19} color={colors.teal}/></View><View style={{flex:1,gap:5}}><Eyebrow>{item.label}</Eyebrow><Text style={s.updateTitle}>{item.title}</Text><Text style={s.updateMeta}>{item.dateLabel}</Text></View><Ionicons name="arrow-up-right" size={17} color={colors.teal}/></Card></Pressable>)}
  </Screen>;
}
function Action({icon,title,description,onPress}:{icon:any;title:string;description:string;onPress:()=>void}){return <Pressable onPress={onPress} style={({pressed})=>[s.action,pressed&&{opacity:.75}]}><View style={s.actionIcon}><Ionicons name={icon} size={21} color={colors.teal}/></View><View style={{flex:1,gap:4}}><Text style={s.actionTitle}>{title}</Text><Text style={s.actionDescription}>{description}</Text></View><Ionicons name="chevron-forward" size={17} color="#8b9ba8"/></Pressable>}
const s=StyleSheet.create({header:{flexDirection:'row',alignItems:'center',gap:12},brand:{fontSize:11,letterSpacing:1.4,fontWeight:'900',color:colors.navy},brandAccent:{color:colors.teal,fontWeight:'800'},greeting:{fontSize:28,fontWeight:'900',letterSpacing:-.8,color:colors.navy,marginTop:5},subtitle:{fontSize:13,color:colors.muted},avatar:{width:48,height:48,borderRadius:17,backgroundColor:colors.navy,alignItems:'center',justifyContent:'center'},avatarText:{color:'#fff',fontSize:15,fontWeight:'900'},welcomeCard:{backgroundColor:colors.navy,borderRadius:23,padding:20,gap:10,overflow:'hidden'},welcomeIcon:{width:38,height:38,borderRadius:13,backgroundColor:'rgba(255,255,255,.12)',alignItems:'center',justifyContent:'center'},welcomeTitle:{fontSize:22,lineHeight:27,fontWeight:'900',letterSpacing:-.4,color:'#fff'},welcomeCopy:{fontSize:12,lineHeight:18,color:'#d2e0ed',maxWidth:300},welcomeButton:{alignSelf:'flex-start',flexDirection:'row',alignItems:'center',gap:8,backgroundColor:'#b9e7ee',paddingVertical:10,paddingHorizontal:13,borderRadius:11,marginTop:3},welcomeButtonText:{fontSize:12,fontWeight:'900',color:colors.navy},orb:{position:'absolute',width:150,height:150,borderRadius:75,borderWidth:22,borderColor:'rgba(255,255,255,.045)',right:-70,bottom:-80},actions:{gap:9},action:{flexDirection:'row',alignItems:'center',gap:12,backgroundColor:'#fff',borderWidth:1,borderColor:colors.border,borderRadius:16,padding:13,minHeight:72},actionIcon:{width:43,height:43,borderRadius:13,backgroundColor:colors.tealLight,alignItems:'center',justifyContent:'center'},actionTitle:{fontSize:13,fontWeight:'900',color:colors.navy},actionDescription:{fontSize:11,color:colors.muted},sectionTop:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},viewAll:{fontSize:11,fontWeight:'900',color:colors.teal},eventCard:{flexDirection:'row',alignItems:'center',gap:12,padding:13},dateBlock:{width:48,height:54,backgroundColor:colors.tealLight,borderRadius:12,alignItems:'center',justifyContent:'center'},dateMonth:{fontSize:9,fontWeight:'900',letterSpacing:.8,color:colors.teal},dateDay:{fontSize:20,fontWeight:'900',color:colors.navy,marginTop:1},eventTitle:{fontSize:12,lineHeight:17,fontWeight:'900',color:colors.navy},eventMeta:{fontSize:11,fontWeight:'800',color:colors.text},eventLocation:{fontSize:10,lineHeight:14,color:colors.muted},updateCard:{flexDirection:'row',alignItems:'center',gap:12,padding:14},updateIcon:{width:42,height:42,borderRadius:13,backgroundColor:colors.tealLight,alignItems:'center',justifyContent:'center'},updateTitle:{fontSize:13,lineHeight:18,fontWeight:'900',color:colors.navy},updateMeta:{fontSize:10,fontWeight:'800',color:colors.muted}});
