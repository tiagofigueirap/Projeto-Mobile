import React from "react";
import { Text, StyleSheet } from "react-native";

function TextoInterCooler(props) {
    return (
        <Text style={css.texto}>{props.texto}</Text>
    );
}

const css = StyleSheet.create({
    
    texto: {
        color:'black',
        fontSize:20.8,
        fontWeight:'bold',
        textAlign:'justify',
        width:350,
        borderWidth:3,
        height:275,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'rgb(255, 224, 178)',
        marginBottom:25
        
    }
});

export default TextoInterCooler;