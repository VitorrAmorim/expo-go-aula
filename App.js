import React from "react";
import { Text, View, StyleSheet } from "react-native";

class OlaMundo extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>Olá Mundo!</Text>
            </View>

        )
    }
}

export default OlaMundo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColours: "#fff",
    }
})