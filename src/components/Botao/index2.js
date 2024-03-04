import React from "react";
import { TouchableHighlight, StyleSheet, Alert, View, Text } from "react-native";

const EsqueciSenha = (props) => {
    return (
        <TouchableHighlight>
            <View style={style.EsqueciSenha}>
                <Text style={style.EsqueciSenha}>{props.senha}</Text>
            </View>
        </TouchableHighlight>
    );
}

const style = StyleSheet.create({

    EsqueciSenha: {
        color: 'white',
        fontSize: 15,
        fontWeight:'bold',
        marginBottom:2,
        
    }


})

export default EsqueciSenha;