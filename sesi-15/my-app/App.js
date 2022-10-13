import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Flexbox } from './materi/Flexbox';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  Home  from './materi/Home';
import Profile from './materi/Profile';
import TextPage from './materi/TextPage';
import ScrollViewPage from './materi/ScrollViewPage';
import ListUser from './materi/ListUser';
import HelloNative from './materi/HelloNative';


export default function App() {
  const imglink = "https://th.bing.com/th/id/R.636537dc613b2dd438993cf656177647?rik=otkgp5UuQIJFBQ&riu=http%3a%2f%2fcdn.thinglink.me%2fapi%2fimage%2f347151190540156928%2f1024%2f10%2fscaletowidth%2f0%2f0%2f1%2f1%2ffalse%2ftrue%3fwait%3dtrue&ehk=dbBWB%2bILC7Qwl%2bxh4T39Q6qi8T1gl8%2b2zV1SCkY8f%2fk%3d&risl=&pid=ImgRaw&r=0"
  const [input, setInput] = useState('')

  const Stack = createNativeStackNavigator(); 

  return (
    
      // <Flexbox/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={Home}
            options={{title: "Pages Home"}}
            />
          <Stack.Screen
            name='Profile'
            component={Profile}
            options={{title: "Profile"}}
            />
          <Stack.Screen
            name='Flexbox'
            component={Flexbox}
            options={{title: "Flexbox"}}
            />
          <Stack.Screen
            name='TextPage'
            component={TextPage}
            options={{title: "TextPage"}}
            />
          <Stack.Screen 
            name='ScrollView'
            component={ScrollViewPage}
            options={{ title: "ScrollView" }}
            />
          <Stack.Screen 
            name='ListUser'
            component={ListUser}
            options={{ title: "ListUser" }}
            />
          <Stack.Screen 
            name='HelloNative'
            component={HelloNative}
            options={{ title: "HelloNative" }}
            />

            
        </Stack.Navigator>
      </NavigationContainer>
    
  )
}

const styles = {
  container: {
    flex: 1, 
    backgroundColor: '#c68b59',
    padding: 25
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232A',
    borderRadius: 6, 
    backgroundColor: '#61dafb',
    color: '#20232A',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "bold"

  }
}

