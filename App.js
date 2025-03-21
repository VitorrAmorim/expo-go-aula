import React from "react";
import { Text, View, StyleSheet } from "react-native";
import OlaMundo from "./components/OlaMundo";

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <OlaMundo />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColours: "#fff",
    },
});

export default App;