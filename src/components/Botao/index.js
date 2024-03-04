import React from "react";
import { TouchableHighlight, StyleSheet, Alert, View, Text } from "react-native";

const BotaoLogin = (props) => {
    return (
        <TouchableHighlight
            style={style.BotaoLogin}
            onPress={() => Alert.alert("Sucesso!")}>
            <View style={style.botao}>
                <Text style={style.valor}>{props.valor}</Text>
            </View>
        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    
    botao: {
        alignItems: 'center',
        backgroundColor: 'rgb(229, 57, 53)',
        padding:12,
        width:170,
        borderWidth:3,
        marginBottom:2
    },
   valor: {
    fontSize:23,
    fontWeight:'bold',
    
   }

})

export default BotaoLogin;