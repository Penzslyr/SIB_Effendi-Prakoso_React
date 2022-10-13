import React from 'react'
import { View, Text, StatusBar } from 'react-native'

const HelloNative = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>React Native</Text>
        <StatusBar style='auto'/>
      </View>
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

export default HelloNative
