import {HeaderButtons, Item} from "react-navigation-header-buttons";
import React from "react";
import {AppHeaderIcon} from "../../components/AppHeaderIcon";

export const bookedScreenOption = ({navigation}) => (
    {
        headerTitle: "Избранное",

        headerLeft: () => (
            <HeaderButtons
                HeaderButtonComponent={AppHeaderIcon}
            >
                <Item
                    title={"Toggle Drawer"}
                    iconName={"ios-menu"}
                    onPress={() => navigation.toggleDrawer()}
                />
            </HeaderButtons>)
    }
)
