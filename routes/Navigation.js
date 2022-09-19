import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

//Screens
import Home from "../screens/Home/Home";
import Series from "../screens/Home/Series";
import Profile from "../screens/Home/Profile";
import MovieDetail from "../screens/Home/MovieDetail";
import { NativeBaseProvider } from "native-base";


const Tab = createBottomTabNavigator()

function MyTabs() {
    return(
        <NativeBaseProvider>
            <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#DD4AA2'
            }}
        >
            <Tab.Screen 
                name='Movies' 
                component={Home}
                options= {{
                    tabBarIcon: ({color, size}) => (<Ionicons name="videocam-outline" color={color} size={size}/>),
                    // tabBarBadge: 0,
                    headerShown: false
                }}/>

            <Tab.Screen
                 name='Series' 
                 component={Series}
                 options= {{
                    tabBarIcon: ({color, size}) => (<Ionicons name="camera-outline" color={color} size={size}/>),
                    // tabBarBadge: 0,
                    headerShown: false
                }}/>

            <Tab.Screen 
                name='Profile' 
                component={Profile}
                options= {{
                    tabBarIcon: ({color, size}) => (<Ionicons name="person-outline" color={color} size={size}/>),
                    // tabBarBadge: 0,
                    headerShown: true
                }}/>
            </Tab.Navigator>
        </NativeBaseProvider>
    );
}

export default function Navigation() {
    return(
            <MyTabs/>
    )
}