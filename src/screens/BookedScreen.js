import React from "react";
import {useSelector} from "react-redux";
import {ListRender} from "../components/ListRender";

export const BookedScreen = ({navigation}) => {
    const bookedPosts = useSelector( state => state.post.bookedPosts)
    return (
        <ListRender navigation={navigation} data={bookedPosts}/>
    );
}
