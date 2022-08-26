import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

//Screens
import Home from "../screens/Home/Home";
import Setttings from "../screens/Home/Setttings";
import Profile from "../screens/Home/Profile";


const Tab = createBottomTabNavigator()

function MyTabs() {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#DD4AA2'
            }}
        >
            <Tab.Screen 
                name='HomeScreen' 
                component={Home}
                options= {{
                    tabBarIcon: ({color, size}) => (<Ionicons name="home-outline" color={color} size={size}/>),
                    tabBarBadge: 0,
                    headerShown: false
                }}/>

            <Tab.Screen
                 name='Settings' 
                 component={Setttings}
                 options= {{
                    tabBarIcon: ({color, size}) => (<Ionicons name="settings-outline" color={color} size={size}/>),
                    tabBarBadge: 0,
                    headerShown: true
                }}/>

            <Tab.Screen 
                name='Profile' 
                component={Profile}
                options= {{
                    tabBarIcon: ({color, size}) => (<Ionicons name="person-outline" color={color} size={size}/>),
                    tabBarBadge: 0,
                    headerShown: true
                }}/>
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return(
            <MyTabs/>
    )
}