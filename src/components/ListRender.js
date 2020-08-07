import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {Post} from "./Post";
import {Text} from "react-native-paper";

export const ListRender = ({data, navigation}) => {
    const openPostHandler = post => {
        navigation.navigate("Post", {postId: post.id, date: post.date, booked: post.booked});
    }

    if (!data.length) {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.noItems}>
                    {"Постов пока нет."}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                keyExtractor={ post => post.id.toString() }
                renderItem={({item}) => <Post post={item} onOpen={openPostHandler}/>}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    noItems: {
        fontFamily: "open-regular",
        textAlign: "center",
        marginVertical: 20,
        fontSize: 20
    }
});

