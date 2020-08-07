import React, {useEffect} from "react";
import {View, StyleSheet, ActivityIndicator} from "react-native";
import {ListRender} from "../components/ListRender";
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "../store/actions/postAction";
import {THEME} from "../theme";


export const MainScreen = ({navigation}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);

    const allPosts = useSelector( state => state.post.allPosts);
    const loading = useSelector(state => state.post.loading)

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator color={THEME.MAIN_COLOR}/>
            </View>
        )
    }
    return (
        <ListRender data={allPosts} navigation={navigation}/>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

