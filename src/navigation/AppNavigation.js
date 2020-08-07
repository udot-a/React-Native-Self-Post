import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";
import {BookedScreen} from "../screens/BookedScreen";
import {CreateScreen} from "../screens/CreateScreen";
import {AboutScreen} from "../screens/AboutScreen";
import React from "react";
import {
    aboutOptions,
    allBookedOptions,
    bookedOptions,
    bookedScreenOption,
    createOptions,
    mainOptions,
    postOptions
} from "./options";
import {THEME} from "../theme";
import {Platform} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


const MaterialTab = createMaterialBottomTabNavigator();


const BookedTab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Booked = createStackNavigator();

const AboutNav = createStackNavigator();

const CreateNav = createStackNavigator();

const navigatorOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
    },
    headerTintColor: Platform.OS === "android" ? '#fff' : THEME.MAIN_COLOR

}

const AboutComponent = () => {
    return (
        <AboutNav.Navigator>
            <AboutNav.Screen
                name={"About"}
                component={AboutScreen}
                options={aboutOptions}
            />
        </AboutNav.Navigator>
    )
}

const CreateComponent = () => {
    return (
        <CreateNav.Navigator>
            <CreateNav.Screen
                name={"Create"}
                component={CreateScreen}
                options={createOptions}
            />
        </CreateNav.Navigator>
    )
}

const PostNavigation = () => {
    return (
            <Stack.Navigator screenOptions={navigatorOptions} >
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={mainOptions}
                />

                <Stack.Screen
                    name="Post"
                    component={PostScreen}
                    options={postOptions}
                />

                <Stack.Screen
                    name="Booked"
                    component={BookedScreen}
                    options={bookedOptions}
                />

            </Stack.Navigator>
    );
}
const BookedNavigation = () => {
    return (
            <Booked.Navigator screenOptions={navigatorOptions} >
                <Booked.Screen
                    name="Booked"
                    component={BookedScreen}
                    options={bookedScreenOption}
                />

                <Booked.Screen
                    name="Post"
                    component={PostScreen}
                    options={postOptions}
                />

            </Booked.Navigator>

    );
}

export const BottomTabNavigation = () => {
    const isAndroid = Platform.OS === "android" ? true : false;
    const Component = isAndroid ? MaterialTab : BookedTab;

    return (
            <Component.Navigator
                shifting = {isAndroid && true}
                barStyle = {{backgroundColor: isAndroid && THEME.MAIN_COLOR}}
                tabBarOptions={{
                    activeTintColor: isAndroid ? "#fff" : THEME.MAIN_COLOR,
                    adaptive: true,
                }}
            >
                <Component.Screen
                    name={"Post"}
                    component={PostNavigation}
                    options={allBookedOptions}
                />

                <Component.Screen
                    name={"Booked"}
                    component={BookedNavigation}
                    options={bookedOptions}
                />
            </Component.Navigator>
    );
}

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: THEME.MAIN_COLOR,
                    labelStyle: {
                        fontFamily: "open-bold"
                    }
                }}
            >
                <Drawer.Screen
                    name="Main"
                    component={BottomTabNavigation}
                    options={{drawerLabel: "Главная"}}
                />

                <Drawer.Screen
                    name="About"
                    component={AboutComponent}
                    options={{drawerLabel: "О приложении"}}
                />

                <Drawer.Screen
                    name="Create"
                    component={CreateComponent}
                    options={{drawerLabel: "Создать"}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

