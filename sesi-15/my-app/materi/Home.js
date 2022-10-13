import React from 'react'
import { View , Text, Button, StyleSheet} from 'react-native'

const Home = ({navigation}) => {
    const handleProfile= () => {
        navigation.navigate("Profile", {name: "Profile"})
    }
    const handleFlexbox = () => {
        navigation.navigate("Flexbox", {name: "Flexbox" })
    }
    const handleText = () => {
        navigation.navigate("TextPage", {name: "TextPage" })
    }
    const handleScrollView = () => {
        navigation.navigate("ScrollView", {name: "ScrollView" })
    }
    const handleListUser = () => {
        navigation.navigate("ListUser", {name: "ListUser" })
    }
    const handleHelloNative = () => {
        navigation.navigate("HelloNative", {name: "HelloNative" })
    }
  return (
    <View style={styles.container}>
        <Text>Welcome Home </Text>
        <Text>Hello World</Text>

        <Button  
            title='Profile'
            onPress={()=>handleProfile()}
            />
        <Button 
            title='Flexbox'
            onPress={()=>handleFlexbox()}
            />
        <Button 
            title='HelloNative'
            onPress={()=>handleHelloNative()}
            />
        <Button 
            title='TextPage'
            onPress={()=>handleText()}
            />
        <Button 
            title='ScrollView'
            onPress={()=>handleScrollView()}
            />
        <Button 
            title='ListUser'
            onPress={()=>handleListUser()}
            />
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center'
}
}
)

export default Home