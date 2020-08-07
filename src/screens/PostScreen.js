import React, {useEffect, useCallback} from "react";
import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from "react-native";
import {THEME} from "../theme";
import {useDispatch, useSelector} from "react-redux";
import {removePost, toggleBooked} from "../store/actions/postAction";

export const PostScreen = ({route, navigation}) => {
    const postId = route.params.postId;
    const post = useSelector(state => state.post.allPosts.find(item => item.id === postId));

    const booked = useSelector(state => state.post.bookedPosts.some(p => p.id === postId));
    const dispatch = useDispatch();



    const toggleHandler = useCallback(
        () => dispatch(toggleBooked(post)),
        [dispatch, post]
    );

    const removeHandler = () => {
        Alert.alert(
            "Удаление поста",
            `Вы точно хотите удалить пост №${postId}?`,
            [
                {
                    text: "Отменить",
                    style: "cancel"
                },
                {
                    text: "Удалить",
                    onPress: () => {
                        navigation.goBack();
                        dispatch(removePost(postId));

                    },
                    style: "destructive"
                }
            ],
            { cancelable: false }
        );
    }


    useEffect(() => {
        navigation.setParams({toggleHandler});
    }, [toggleHandler]);

    useEffect(() => {
        navigation.setParams({booked});
    }, [booked]);


    if (!post) {
        return <View></View>;
    }



    return (
        <ScrollView>
            <Image
                source={{uri: post.img}}
                style={styles.image}
            />

            <View>
                <Text style={styles.text}>
                    {post.text}
                </Text>
            </View>

            <Button
                title={"Удалить"}
                color={THEME.DANGER_COLOR}
                onPress={removeHandler}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        width: "100%",
        height: 200
    },
    text: {
        alignSelf: "center",
        marginTop: 10,
        padding: 5,
        marginBottom: 10,
        fontFamily: "open-bold"
    }
});
