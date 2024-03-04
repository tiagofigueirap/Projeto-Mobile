import React from "react";
import {  SafeAreaView, Text, TextInput, StyleSheet } from "react-native";

function EmailInput(props){
    return (
        <SafeAreaView>
            <Text style={style.label}>
                {props.label}
            </Text>
            <TextInput 
            style={style.input}
            placeholder={props.placeholder}>
                
            </TextInput>
            
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    input:{
        borderWidth:1,
        height:47,
        marginBottom:15,
        marginTop:3,
        padding:12,
        width:300,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'

    },
    label:{
        fontSize:25,
        color:'white',
        fontWeight:'bold',
        
    }
})

export default EmailInput;