// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";

// //Screens
// import FirstScreen from "../screens/FirstScreen";
// import Login from "../screens/Login";
// import SignUp from "../screens/SignUp";
// import { Ionicons } from "@expo/vector-icons";

// const Tab = createBottomTabNavigator()

// function MyTabs() {
//     return(
//         <Tab.Navigator
//             initialRouteName="FirstScreen"
//             screenOptions={{
//                 tabBarActiveTintColor: 'purple'
//             }}
//         >
//             <Tab.Screen 
//                 name='FirstScreen' 
//                 component={FirstScreen}
//                 options= {{
//                     tabBarIcon: ({color, size}) => (<Ionicons name="home-outline" color={color} size={size}/>),
//                     tabBarBadge: 0,
//                     headerShown: true
//                 }}/>

//             <Tab.Screen
//                  name='Login' 
//                  component={Login}
//                  options= {{
//                     tabBarIcon: ({color, size}) => (<Ionicons name="bonfire-outline" color={color} size={size}/>),
//                     tabBarBadge: 0,
//                     headerShown: true
//                 }}/>

//             <Tab.Screen 
//                 name='SignUp' 
//                 component={SignUp}
//                 options= {{
//                     tabBarIcon: ({color, size}) => (<Ionicons name="chatbox-ellipses-outline" color={color} size={size}/>),
//                     tabBarBadge: 0,
//                     headerShown: true
//                 }}/>
//         </Tab.Navigator>
//     );
// }

// export default function Navigation() {
//     return(
//         <NavigationContainer>
//             <MyTabs/>
//         </NavigationContainer>
//     )
// }