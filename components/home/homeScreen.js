import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Appbar from './appbar'
import ChatScreen from './chatscreen'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container} >
        <StatusBar/>
        <Appbar navigation = {navigation}/>
        <ChatScreen />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#2d2d2d'
    }
})