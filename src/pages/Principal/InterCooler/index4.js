import React from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native';

import TituloInterCooler from "../../../components/Titulo/tituloInterCooler";
import TextoInterCooler from "../../../components/Titulo/textoInterCooler";


const imgFundo = '../../../../assets/img/Principal.jpg'
const imgTurbo = '../../../../assets/img/intercooler.png'

export default function InterCooler({ navigation }) {

    return (

        <View style={styles.container}>
            <ImageBackground
                source={require(imgFundo)}
                style={styles.background}>
                <View style={styles.viewInterna}>

                    <TituloInterCooler titulo="InterCooler" />

                    <Image
                        source={require(imgTurbo)}
                        style={styles.imagem} />

                    <TextoInterCooler style={styles.texto} texto='O intercooler resfria o ar comprimido pelo turbo aumentando sua densidade e permitindo a introdução de mais oxigênio na câmara de combustão. Isso resulta em uma queima mais eficiente e em um aumento de potência do motor. Ele permite que o carro ande em altas velocidades por mais tempo resfriando todo o sistema, impedindo o aquecimento.' />


                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: -65
    },
    background: {
        flex: 1,
        width: '100%',
        marginLeft: '-13.5%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    viewInterna: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    imagem: {
        flex: 1,
        width: 330,
        resizeMode: 'contain',
     
    },


});
