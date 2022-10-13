import { useState } from "react";
import { View, Text, StatusBar, StyleSheet, TextInput } from "react-native";


export default function TextPage({ route }) {
    const [input, setInput] = useState("")

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome to {route.params.name}
            </Text>
            <TextInput
                style={styles.textInput}
                placeholder="Input Text Here"
                onChangeText={text => setInput(text)}
                defaultValue={input}
            />
            <Text
                style={{ padding: 10, fontSize: 25 }}
            >
                The text you entered : {input}
            </Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 25
    },
    text: {
        color: '#002B5B',
        fontSize: 30
    },
    textInput: {
        padding: 8,
        backgroundColor: "grey",
        height: 60,
        color: "white"
    },
    title: {
        fontSize: 30,
    }
});