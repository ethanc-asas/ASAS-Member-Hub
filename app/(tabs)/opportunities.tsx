import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Screen } from "../../components/Screen";
import { Card, Eyebrow } from "../../components/Ui";
import { SectionHeading } from "../../components/SectionHeading";
import { colors } from "../../constants/theme";
import { sampleOpportunities } from "../../data/sampleData";

const filters = ["All", "Awards", "Research", "Funding", "Students", "Careers"];
const matches = (type:string, filter:string) => filter === "All" ||
  (filter === "Awards" && type === "AWARDS") ||
  (filter === "Research" && type === "RESEARCH") ||
  (filter === "Funding" && type === "FUNDING") ||
  (filter === "Students" && ["INTERNSHIP", "STUDENT RECOGNITION"].includes(type)) ||
  (filter === "Careers" && type === "CAREER");

export default function OpportunitiesScreen(){
  const [filter,setFilter]=useState("All");
  const items=useMemo(()=>sampleOpportunities.filter(item=>matches(item.type,filter)),[filter]);
  return <Screen>
    <View style={s.heading}><Eyebrow>GROW YOUR CAREER</Eyebrow><Text style={s.title}>Opportunities</Text><Text style={s.subtitle}>Find funding, recognition, research, and career opportunities.</Text></View>
    <Pressable onPress={()=>Linking.openURL("https://www.asas.org/foundation/Inspire-Ignite-Invest/2027-dc-policy-intern-guidelines")}><Card style={s.featured}><View style={s.featureIcon}><Ionicons name="briefcase-outline" size={21} color="#b9e7ee"/></View><Text style={s.featureTitle}>D.C. Animal Agriculture Policy Internship</Text><Text style={s.featureSub}>Summer 2027 · Washington, D.C.</Text><View style={s.featureBottom}><View style={{flex:1,gap:3}}><Text style={s.deadlineLabel}>APPLICATION DEADLINE</Text><Text style={s.deadline}>November 6, 2026</Text></View><View style={s.featureArrow}><Ionicons name="arrow-up-right" size={18} color={colors.navy}/></View></View></Card></Pressable>
    <SectionHeading title="Explore by interest"/>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.filters}>{filters.map(item=><Pressable key={item} onPress={()=>setFilter(item)} style={[s.filter,filter===item&&s.filterActive]}><Text style={[s.filterText,filter===item&&s.filterTextActive]}>{item}</Text></Pressable>)}</ScrollView>
    <View style={s.listHead}><Text style={s.resultCount}>{items.length} OPPORTUNITIES</Text></View>
    {items.map(item=><Pressable key={item.id} onPress={()=>Linking.openURL(item.url)}><Card style={s.item}><View style={s.itemIcon}><Ionicons name={iconFor(item.type)} size={20} color={colors.teal}/></View><View style={{flex:1,gap:5}}><Text style={s.itemTitle}>{item.title}</Text><Text style={s.itemDeadline}>{item.deadline}</Text><Text style={s.itemDescription}>{item.description}</Text></View><Ionicons name="chevron-forward" size={17} color="#8b9ba8"/></Card></Pressable>)}
  </Screen>
}
function iconFor(type:string):any {if(type==='INTERNSHIP')return 'briefcase-outline';if(type==='AWARDS')return 'trophy-outline';if(type==='RESEARCH')return 'flask-outline';if(type==='FUNDING')return 'wallet-outline';if(type==='STUDENT RECOGNITION')return 'school-outline';return 'compass-outline';}
const s=StyleSheet.create({heading:{gap:7},title:{fontSize:29,fontWeight:'900',letterSpacing:-.7,color:colors.navy},subtitle:{fontSize:13,lineHeight:20,color:colors.muted},featured:{backgroundColor:colors.navy,borderColor:colors.navy,padding:18,gap:10},featureIcon:{width:40,height:40,borderRadius:13,backgroundColor:'rgba(255,255,255,.12)',alignItems:'center',justifyContent:'center'},featureTitle:{fontSize:18,lineHeight:23,fontWeight:'900',color:'#fff'},featureSub:{fontSize:11,color:'#d2dfeb'},featureBottom:{borderTopWidth:1,borderTopColor:'rgba(255,255,255,.18)',paddingTop:12,flexDirection:'row',alignItems:'center',gap:10},deadlineLabel:{fontSize:8,fontWeight:'900',letterSpacing:.8,color:'#b9e7ee'},deadline:{fontSize:12,fontWeight:'800',color:'#fff',marginTop:2},featureArrow:{width:35,height:35,borderRadius:11,backgroundColor:'#b9e7ee',alignItems:'center',justifyContent:'center'},filters:{gap:7,paddingVertical:2},filter:{paddingHorizontal:13,paddingVertical:9,borderRadius:30,backgroundColor:'#fff',borderWidth:1,borderColor:colors.border},filterActive:{backgroundColor:colors.navy,borderColor:colors.navy},filterText:{fontSize:11,fontWeight:'800',color:colors.muted},filterTextActive:{color:'#fff'},listHead:{marginTop:-4},resultCount:{fontSize:9,fontWeight:'900',letterSpacing:1,color:colors.teal},item:{flexDirection:'row',alignItems:'flex-start',gap:11,padding:13},itemIcon:{width:39,height:39,borderRadius:12,backgroundColor:colors.tealLight,alignItems:'center',justifyContent:'center'},itemTitle:{fontSize:13,lineHeight:18,fontWeight:'900',color:colors.navy},itemDeadline:{fontSize:10,fontWeight:'900',color:colors.teal},itemDescription:{fontSize:10,lineHeight:15,color:colors.muted}});
