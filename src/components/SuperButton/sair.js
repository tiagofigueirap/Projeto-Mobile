import { StyleSheet, Text, View, TouchableOpacity,Alert } from "react-native";

const Sair = (props) => {
    return (
        <View style={style.container}>
            <TouchableOpacity 
                style={style.button} 
                onPress={props.acao}
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
        width:"20%",
        borderRadius: 4,
        marginTop: 5
    },
    texto: {
        fontSize:18,
        color:"#fff",
        fontWeight:'700',
    }
});

export default Sair;