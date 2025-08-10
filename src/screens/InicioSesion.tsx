import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styless } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface FormLogin {
    nombreUsuario: string;
    password: string;
}

export const InicioSesion = () => {
    const [formLogin, setFormLogin] = useState<FormLogin>({
        nombreUsuario: '',
        password: ''
    });

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true)

    //funcion para actualizar el formulario
    const changeForm = (property: string, value: string): void => {
        setFormLogin({ ...formLogin, [property]: value });
    };

    const handleLogin = () => {
        if (!formLogin.nombreUsuario || !formLogin.password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }
        Alert.alert('Éxito', 'Registro completado con éxito');

        console.log(formLogin);

        setFormLogin({
            nombreUsuario: '',
            password: '',
        });
    };

    const navigation = useNavigation();

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.titulo}>Inicio de Sesion</Text>

                <Text style={styles.label}>Nombre de Usuario</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu nombre de usuario"
                    onChangeText={(value) => changeForm('nombreUsuario', value)}
                    value={formLogin.nombreUsuario}
                />

                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu contraseña"
                    onChangeText={(value) => changeForm('password', value)}
                    value={formLogin.password}
                    secureTextEntry={hiddenPassword}
                />
                <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'}
                    size={23}
                    style={styles.iconForm}
                    onPress={() => setHiddenPassword(!hiddenPassword)} />

                <View style={styles.botonesContainer}>
                    <TouchableOpacity
                        style={[styles.boton, styles.botonRegistro]}
                        onPress={handleLogin}
                    >
                        <Text style={styles.textoBoton}>Ingresar</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styless.textoLogin}>¿No tienes una cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Registro' }))}>
                        <Text style={styless.textoLoginLink}> Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFC107',
    },
    formContainer: {
        padding: 20,
        marginHorizontal: 20,
        backgroundColor: '#04687F',
        borderRadius: 10,
        elevation: 5,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'black',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
        color: 'black',
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    botonesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    boton: {
        flex: 1,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    botonRegistro: {
        backgroundColor: '#FFC107',
    },
    textoBoton: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    iconForm: {
        position: 'absolute',
        bottom: 190,
        right: 40
    }
});