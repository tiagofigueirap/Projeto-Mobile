import React from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native';

import TituloTurbo from "../../../components/Titulo/tituloTurbo";
import TextoTurbo from "../../../components/Titulo/textoTurbo";


const imgFundo = '../../../../assets/img/Principal.jpg'
const imgTurbo = '../../../../assets/img/turbo.png'

export default function Turbo({ navigation }) {

    return (

        <View style={styles.container}>
            <ImageBackground
                source={require(imgFundo)}
                style={styles.background}>
                <View style={styles.viewInterna}>

                    <TituloTurbo titulo="Turbo" />

                    <Image
                        source={require(imgTurbo)}
                        style={styles.imagem} />

                    <TextoTurbo style={styles.texto} texto="Aqui você pode ver peças de carros e todas as suas informações. 
                     Seus detalhes, uso, importância, desempenho e como essas peças
                     são importantes para que seu carro tenha um melhor desempenho e potência.     Aproveitem <3" />


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
        width: 300,
        resizeMode: 'contain',
     
    },


});
