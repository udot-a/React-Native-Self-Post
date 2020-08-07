import {HeaderButtons, Item} from "react-navigation-header-buttons/index";
import {AppHeaderIcon} from "../../components/AppHeaderIcon";
import React from "react";

export const createOptions = ({navigation}) => ({
    headerTitle: "Создать пост",
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
