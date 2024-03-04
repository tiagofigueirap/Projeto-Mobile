import { StyleSheet, Text, View, TouchableOpacity,Alert } from "react-native";

const Registrar = (props) => {
    return (
        <View style={style.container}>
            <TouchableOpacity 
                style={style.button} 
                onPress={() => Alert.alert('Sucesso', 'Registro concluído.')}
            >
                
                <Text style={style.texto}>{props.value}</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "red",
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

export default Registrar;