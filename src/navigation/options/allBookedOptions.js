import { Ionicons } from '@expo/vector-icons'
import React from "react";

export const allBookedOptions = {
    tabBarLabel: "Все",
    tabBarIcon: info => (
        <Ionicons name='ios-albums' size={25} color={info.color} />
    )

}
