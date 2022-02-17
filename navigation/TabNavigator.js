import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";
import Profile from "../screens/Profile"
import Horry from "../screens/Horry"
import Dictonary from "../screens/Dictonary"
const Tab = createBottomTabNavigator();
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
const BottomTabNavigator=()=>{
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused
                ? 'attach'
                : 'barcode-outline';
            } 
             if (route.name === 'Profile') {
              iconName = focused
                ? 'people'
                : 'people';
            } 
              if (route.name === 'Dictonary') {
              iconName = focused
                ? 'book'
                : 'book';
            } 
               if (route.name === 'CreateStory') {
              iconName = focused
                ? 'book'
                : 'book';
            } 
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel:false,
           style:{
             position:"absolute",
             bottom:25,
             left:20,
             right:20,
             elevation:0,
             backgroundColor:"white",
             borderRadius:15,
             height:60 ,
             ...styles.shadow
            }
          
        }}
      >
       <Tab.Screen name="Dictonary" component={Dictonary} />
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreateStory" component={CreateStory} />
         <Tab.Screen name="Profile" component={Profile} />
         
      </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
shadow:{
shadowColor:"black",
shadowOffset:{
  width:0,
  height:10
},
shadowOpacity:0.25,
shadowRadius:3.5,
elevation:5 
}


})
export default BottomTabNavigator