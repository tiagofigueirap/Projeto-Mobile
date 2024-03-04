import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, Button, Alert } from 'react-native';
import SuperButton from '../../components/SuperButton/Index';
import EsqueciSenha from '../../components/SuperButton/esqueciSenha';

import Titulo from '../../components/Titulo';
import EmailInput from '../../components/Input';

const imgLogin = '../../../assets/img/Login.jpg'


export default function Login({ navigation }) {

    const Logar = () => {
        // Validar se e-mail e senha estão corretos
        navigation.navigate("Principal")
        Alert.alert('Sucesso', 'Login realizado.')
    };

    const Registrar = () => {
        // Validar se e-mail e senha estão corretos
        navigation.navigate("Cadastro")
    };

    return (

        <View style={styles.container}>
            <ImageBackground
                source={require(imgLogin)}
                style={styles.background}>
                <View style={styles.viewInterna}>
                    <Titulo titulo="Login" />

                    <EmailInput
                        label="E-mail"
                        placeholder="exemplo@exemplo.com" />

                    <EmailInput
                        label="Senha"
                        placeholder="abc123" />

                    <SuperButton
                        value={'Entrar'}
                        acao={Logar} />

                    <SuperButton
                        value={'Registrar-se'}
                        acao={Registrar} />

                    <EsqueciSenha
                        value={'Esqueci minha senha'} />



                    {/* <Button
                        title="Esqueci minha senha"
                        color="rgb(120, 144, 156)"
                        onPress={() => Alert.alert('Pronto', 'Link de redefinição enviado para seu e-mail')} /> */}

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


