import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/theme";

export default function LoginScreen() {
  const router = useRouter();
  const [name, setName] = useState("Justin Bartlett");
  const [email, setEmail] = useState("justin.bartlett@example.com");
  const [password, setPassword] = useState("ASASmember2026");
  const [showPassword, setShowPassword] = useState(false);
  const signIn = () => router.replace("/(tabs)");

  return <KeyboardAvoidingView style={s.page} behavior={Platform.OS === "ios" ? "padding" : undefined}>
    <View style={s.glowOne} /><View style={s.glowTwo} />
    <View style={s.content}>
      <View style={s.brandRow}><View style={s.logo}><Ionicons name="leaf" size={26} color="#fff" /></View><View><Text style={s.brand}>ASAS</Text><Text style={s.brandSub}>MEMBER HUB</Text></View></View>
      <View style={s.intro}><Text style={s.kicker}>YOUR ASAS MEMBERSHIP, CONNECTED</Text><Text style={s.title}>Welcome back.</Text><Text style={s.subtitle}>Your community, events, professional resources, and opportunities — all in one place.</Text></View>
      <View style={s.formCard}>
        <Text style={s.formTitle}>Sign in to your account</Text>
        <Text style={s.label}>NAME</Text><View style={s.inputWrap}><Ionicons name="person-outline" size={18} color={colors.muted}/><TextInput accessibilityLabel="Name" value={name} onChangeText={setName} style={s.input} placeholder="Your name" autoCapitalize="words" /></View>
        <Text style={s.label}>EMAIL ADDRESS</Text><View style={s.inputWrap}><Ionicons name="mail-outline" size={18} color={colors.muted}/><TextInput accessibilityLabel="Email address" value={email} onChangeText={setEmail} style={s.input} placeholder="you@example.com" keyboardType="email-address" autoCapitalize="none" /></View>
        <Text style={s.label}>PASSWORD</Text><View style={s.inputWrap}><Ionicons name="lock-closed-outline" size={18} color={colors.muted}/><TextInput accessibilityLabel="Password" value={password} onChangeText={setPassword} style={s.input} secureTextEntry={!showPassword} placeholder="Password" autoCapitalize="none"/><Pressable onPress={() => setShowPassword(!showPassword)} hitSlop={10}><Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={19} color={colors.muted}/></Pressable></View>
        <Pressable onPress={signIn} style={({pressed}) => [s.signIn, pressed && {opacity:.88}]}><Text style={s.signInText}>Sign in</Text><Ionicons name="arrow-forward" size={18} color="#fff"/></Pressable>
        <Pressable onPress={() => router.replace("/(tabs)")} style={s.secondarySignIn}><Text style={s.secondaryText}>Continue as {name.trim() || "Justin Bartlett"}</Text></Pressable>
      </View>
      <Text style={s.footer}>AMERICAN SOCIETY OF ANIMAL SCIENCE</Text>
    </View>
  </KeyboardAvoidingView>;
}
const s = StyleSheet.create({
  page:{flex:1,backgroundColor:'#f4f7fa',justifyContent:'center',overflow:'hidden'},content:{paddingHorizontal:24,paddingVertical:26,gap:25},glowOne:{position:'absolute',width:330,height:330,borderRadius:165,backgroundColor:'#e1f0f4',top:-150,right:-130},glowTwo:{position:'absolute',width:250,height:250,borderRadius:125,backgroundColor:'#e7edf6',bottom:-100,left:-130},
  brandRow:{flexDirection:'row',alignItems:'center',gap:12},logo:{width:50,height:50,borderRadius:17,backgroundColor:colors.navy,alignItems:'center',justifyContent:'center'},brand:{fontSize:22,fontWeight:'900',letterSpacing:1.5,color:colors.navy},brandSub:{fontSize:10,fontWeight:'800',letterSpacing:2.4,color:colors.teal,marginTop:2},intro:{gap:9},kicker:{fontSize:10,fontWeight:'900',letterSpacing:1.2,color:colors.teal},title:{fontSize:35,fontWeight:'900',letterSpacing:-1.2,color:colors.navy},subtitle:{fontSize:14,lineHeight:22,color:colors.muted,maxWidth:360},
  formCard:{backgroundColor:'#fff',borderRadius:24,padding:20,borderWidth:1,borderColor:colors.border,gap:10,shadowColor:'#17365d',shadowOpacity:.07,shadowRadius:20,shadowOffset:{width:0,height:8},elevation:3},formTitle:{fontSize:16,fontWeight:'900',color:colors.navy,marginBottom:3},label:{fontSize:9,fontWeight:'900',letterSpacing:1.1,color:'#627587',marginTop:5},inputWrap:{height:49,borderWidth:1,borderColor:'#dce5ec',borderRadius:13,flexDirection:'row',alignItems:'center',paddingHorizontal:13,gap:10,backgroundColor:'#fbfcfd'},input:{flex:1,color:colors.text,fontSize:14,paddingVertical:0},signIn:{height:51,marginTop:8,backgroundColor:colors.navy,borderRadius:14,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:10},signInText:{color:'#fff',fontSize:14,fontWeight:'800'},secondarySignIn:{alignItems:'center',paddingVertical:5},secondaryText:{fontSize:12,fontWeight:'800',color:colors.teal},footer:{textAlign:'center',fontSize:9,fontWeight:'800',letterSpacing:1.5,color:'#8494a2'}
});
