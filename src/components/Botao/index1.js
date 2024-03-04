import React from "react";
import { TouchableHighlight, StyleSheet, Alert, View, Text, TouchableOpacity } from "react-native";

const BotoesAjuda = (props) => {
    return (
        <TouchableOpacity>
            <View style={style.BotoesAjuda}>
                <Text style={style.BotoesAjuda}>{props.valor}</Text>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({

    BotoesAjuda: {
        color: 'black',
        fontSize: 16,
        fontWeight:'bold',
        backgroundColor:'rgb(118, 255, 3)',
        borderWidth:2,
        width:95,
        textAlign:'center',
        alignItems:'center',
    }


})

export default BotoesAjuda;