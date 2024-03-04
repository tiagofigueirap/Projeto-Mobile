import React from "react";
import { Text, StyleSheet } from "react-native";

function Titulo(props) {
    return (
        <Text style={css.titulo}>{props.titulo}</Text>
    );
}

const css = StyleSheet.create({
    titulo: {
        color: 'rgb(229, 57, 53)',
        fontSize: 85,
        fontWeight:'bold',
        marginTop:'-10%',

        
        
        
    },
    
});

export default Titulo;