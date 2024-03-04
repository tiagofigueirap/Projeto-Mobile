import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, Button, Alert } from 'react-native';

import Titulo from '../../components/Titulo';
import Texto from '../../components/Titulo/index1';
import Sair from '../../components/SuperButton/sair';

const imgPrincipal = '../../../assets/img/Principal.jpg'

export default function Principal({ navigation }) {

    const SairPrincipal = () => {
        // Validar se e-mail e senha estão corretos
        navigation.navigate("Login")
    };
    
    return (

        <View style={styles.container}>
            <ImageBackground
                source={require(imgPrincipal)}
                style={styles.background}>
                <View style={styles.viewInterna}>
                    <Titulo titulo="Bem vindo" />

                    <Texto style={styles.texto} texto="Aqui você pode ver peças de carros e todas as suas informações. 
                     Seus detalhes, uso, importância, desempenho e como essas peças
                     são importantes para que seu carro tenha um melhor desempenho e potência.     Aproveitem <3" />
                    
                    <Sair
                        value={'Sair'}
                        acao={SairPrincipal} />
                
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


});

