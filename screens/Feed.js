import React, { Component } from 'react';
import { Text, View,Linking,StyleSheet,TouchableOpacity} from 'react-native';

export default class Feed extends Component {
    render() {
        return (
            <View  
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
               <Text  onPress={ ()=> Linking.openURL('https://google.com') } >Click Here To Open Google.
               </Text>
              <TouchableOpacity style={{width:200,height:20,backgroundColor:"red",alignItems:"center"}}
                  onPress={ ()=> Linking.openURL('https://google.com') } 
              >
              <Text>click me</Text>
          
              </TouchableOpacity>

                <Text>Feeds</Text>
            </View>
        )
    }
}