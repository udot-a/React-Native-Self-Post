import { Ionicons } from '@expo/vector-icons'
import React from "react";

export const bookedOptions = {
    tabBarLabel: "Избранное",
    tabBarIcon: info => {
        return (
        <Ionicons name='ios-star' size={25} color={info.color}/>
    )}

}
