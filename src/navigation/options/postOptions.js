import {THEME} from "../../theme";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/AppHeaderIcon";
import React from "react";

export const postOptions = ({route}) => ({
    headerTitle: `Пост от ${new Date(route.params.date).toLocaleDateString()}`,

    headerRight: () => {
        const iconName = route.params.booked ? "ios-star" : "ios-star-outline";

        return (
            <HeaderButtons
                HeaderButtonComponent={AppHeaderIcon}
            >
                <Item
                    title={"Favorites"}
                    iconName={iconName}
                    onPress={() => route.params.toggleHandler()}
                />
            </HeaderButtons>)
    }
});
