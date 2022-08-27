import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {  NativeBaseProvider } from "native-base";
//Screens
import FirstScreen from "../screens/FirstScreen";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import RecoveryPass from "../screens/RecoveryPass";
import Navigation from "./Navigation";
import MovieDetail from "../screens/Home/MovieDetail";

const LogStackNavigator = createNativeStackNavigator();

function LogStack({ navigation }) {
  return (
    <NativeBaseProvider>
        <LogStackNavigator.Navigator initialRouteName="FirstView">

          <LogStackNavigator.Screen
            name="FirstScreen"
            component={FirstScreen}
            options={{
              headerShown: false,
            }}
          />

          <LogStackNavigator.Screen 
            name="Login" 
            component={Login}
            options={{
                headerShown: true,
                headerTransparent:true,
                headerBackTitleVisible: false,
                headerTintColor: 'white'
            }} />

          <LogStackNavigator.Screen 
            name="SignUp" 
            component={SignUp}
            options={{
                headerShown: true,
                headerTransparent:true,
                headerBackTitleVisible: false,
                headerTintColor: 'white'
            }} />

            <LogStackNavigator.Screen 
            name="Recovery" 
            component={RecoveryPass}
            options={{
                headerShown: true,
                headerTransparent:true,
                headerBackTitleVisible: false,
                headerTintColor: 'white'
            }} />

            <LogStackNavigator.Screen 
            name="Navigation" 
            component={Navigation}
            options={{
                headerShown: false
            }} />

            <LogStackNavigator.Screen 
            name="MovieDetail" 
            component={MovieDetail}
            options={{
              headerShown: true,
              headerTransparent:true,
              headerBackTitleVisible: false,
              headerTintColor: '#DD4AA2'
            }} />
          
        </LogStackNavigator.Navigator>
    </NativeBaseProvider>
  );
}

export default function LogNavigation() {
  return (
    <NavigationContainer>
      <LogStack />
    </NavigationContainer>
  );
}
