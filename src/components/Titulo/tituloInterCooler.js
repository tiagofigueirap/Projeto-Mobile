import React from "react";
import { Text, StyleSheet } from "react-native";

function TituloInterCooler(props) {
    return (
        <Text style={css.titulo}>{props.titulo}</Text>
    );
}

const css = StyleSheet.create({
    titulo: {
        color: 'white',
        fontSize: 70,
        fontWeight:'bold',
        marginTop:'5%',
        
    },
    
});

export default TituloInterCooler;