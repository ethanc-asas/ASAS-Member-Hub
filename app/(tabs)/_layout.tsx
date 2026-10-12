import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/theme";
export default function TabLayout(){return <Tabs screenOptions={{headerShown:false,tabBarActiveTintColor:colors.teal,tabBarInactiveTintColor:'#8795a2',tabBarLabelStyle:{fontSize:10,fontWeight:'800',marginBottom:5},tabBarStyle:{height:66,paddingTop:7,paddingBottom:6,borderTopColor:colors.border,backgroundColor:'#fff',elevation:12},tabBarItemStyle:{paddingVertical:1}}}>
<Tabs.Screen name="index" options={{title:'Home',tabBarIcon:({color,size})=><Ionicons name="home" color={color} size={size}/>}}/>
<Tabs.Screen name="membership" options={{title:'Membership',tabBarIcon:({color,size})=><Ionicons name="id-card-outline" color={color} size={size}/>}}/>
<Tabs.Screen name="events" options={{title:'Events',tabBarIcon:({color,size})=><Ionicons name="calendar-outline" color={color} size={size}/>}}/>
<Tabs.Screen name="opportunities" options={{title:'Explore',tabBarIcon:({color,size})=><Ionicons name="compass-outline" color={color} size={size}/>}}/>
<Tabs.Screen name="resources" options={{title:'Resources',tabBarIcon:({color,size})=><Ionicons name="library-outline" color={color} size={size}/>}}/>
</Tabs>}
