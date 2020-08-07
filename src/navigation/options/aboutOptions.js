import {HeaderButtons, Item} from "react-navigation-header-buttons/index";
import {AppHeaderIcon} from "../../components/AppHeaderIcon";
import React from "react";

export const aboutOptions= ({navigation}) => ({
    headerTitle: "О приложении",
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
});
