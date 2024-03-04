import { StyleSheet, Text, View, TouchableOpacity,Alert } from "react-native";

const EsqueciSenha = (props) => {
    return (
        <View style={style.container}>
            <TouchableOpacity 
                style={style.button} 
                onPress={() => Alert.alert('Pronto', 'Link de redefinição enviado para seu e-mail.')}
            >
                
                <Text style={style.texto}>{props.value}</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "rgb(158, 158, 158)",
        padding: 12,
        width:"85%",
        borderRadius: 4,
        marginTop: 5
    },
    texto: {
        fontSize:18,
        color:"#fff",
        fontWeight:'700',
    }
});

export default EsqueciSenha;