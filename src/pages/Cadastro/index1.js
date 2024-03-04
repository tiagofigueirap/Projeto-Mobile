import React from 'react';
import { StyleSheet, View, ImageBackground, Button, Alert } from 'react-native';

import Titulo from '../../components/Titulo';
import EmailInput from '../../components/Input';
import Registrar from '../../components/SuperButton/registrar';

const imgLogin = '../../../assets/img/Login.jpg'


export default function Cadastro() {

    return (

        <View style={styles.container}>
            <ImageBackground
                source={require(imgLogin)}
                style={styles.background}>
                <View style={styles.viewInterna}>
                    <Titulo titulo="Registro" />

                    <EmailInput
                        label="E-mail"
                        placeholder="exemplo@exemplo.com" />

                    <EmailInput
                        label="Senha"
                        placeholder="abc123" />

                    <EmailInput
                        label="Nome"
                        placeholder="exemplo" />

                    <Registrar
                        value={'Registrar'} />

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

    }
});