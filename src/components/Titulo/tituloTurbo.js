import React from "react";
import { Text, StyleSheet } from "react-native";

function TituloTurbo(props) {
    return (
        <Text style={css.titulo}>{props.titulo}</Text>
    );
}

const css = StyleSheet.create({
    titulo: {
        color: 'white',
        fontSize: 100,
        fontWeight:'bold',
        marginTop:'5%',
        
    },
    
});

export default TituloTurbo;