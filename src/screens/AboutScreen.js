import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const AboutScreen = () => {
    return (
        <View style={styles.center}>
            <Text>
                {"Это приложение для личный заметок."}
            </Text>
            <Text>
                {"Версия приложения"}


                {"1.0.0."}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
   center: {
       flex: 1,
       alignItems: "center",
       justifyContent: "center",
   }
});
