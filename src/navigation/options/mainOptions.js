import {HeaderButtons, Item} from "react-navigation-header-buttons";
import React from "react";
import {AppHeaderIcon} from "../../components/AppHeaderIcon";

export const mainOptions = ({navigation}) => (
    {
        headerTitle: "Мой блог",

        headerRight: () => (
            <HeaderButtons
                HeaderButtonComponent={AppHeaderIcon}
            >
                <Item
                    title={"Take photo"}
                    iconName={"ios-camera"}
                    onPress={ () => navigation.navigate("Create") }
                />
            </HeaderButtons>),

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
