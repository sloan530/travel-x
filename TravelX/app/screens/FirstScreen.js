import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, Alert, TouchableWithoutFeedback, View, Image, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function FirstScreen(props) {
    
    return (
        
        <View style={styles.background}>
            <StatusBar style="auto" />
            <View style={styles.logoContainer}>
                <TouchableWithoutFeedback onPress={()=>console.log("Image Tapped")}>
                <Image  
                    source={require('../assets/logo.png')}
                    style={[styles.logo, {justifyContent: 'center'}]} />
                </TouchableWithoutFeedback>
                <Text style={[styles.text, {top: -40}]}>Some cool subtitle here</Text>
            </View>
            
            <View style={styles.StartButton}>
                <Text style={styles.text}>Get Started!</Text>
            </View>
            <View style={styles.loginButton}>
                <Text style={styles.text}>login</Text>
            </View>
        </View>
        
    );
}
//<Button color="#E9672D" title="Get Started!" onPress={()=>console.log("Button Pressed")}/>
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#04041C',
        justifyContent: "flex-end",
        alignItems: 'center',
        
    },
    logo: {
        flex: 0.5,
        
    },
    logoContainer: {
        top: 180,
        position: 'absolute',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: "#E9672D",
        alignItems: 'center',
        justifyContent: 'center'
    },
    StartButton: {
        width: '100%',
        height: 50,
        backgroundColor: "#fc5c65",
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff'
    }
  });


export default FirstScreen;