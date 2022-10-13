import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const MarginTop = () => <View style={{ marginTop: 10 }} />
 const Profile = ({route}) => {
  return (
    <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>
                    Welcome to {route.params.name}
                </Text>
            </View>
            <MarginTop />
            <Image
                source={{
                    uri: "http://clipart-library.com/images_k/surprised-patrick-transparent/surprised-patrick-transparent-8.png"
                }}
                style={{ width: 400, height: 400 }}
            />
            <View style={{ alignItems: "center" }}>
                <Text style={{fontSize: 15}}>
                    Effendi Prakoso
                </Text>
                <Text style={{fontSize: 15}}>
                    RCTN-KS05-016
                </Text>
            </View>
            
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
  },
  text: {
      fontSize: 30
  }
});

export default Profile