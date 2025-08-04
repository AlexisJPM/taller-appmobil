import React, { useState } from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';

export const InicioSesion = () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [password, setPassword] = useState('');

    const validarRegistro = () => {
        if (!nombreUsuario || !password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }
        Alert.alert('Éxito', 'Registro completado con éxito');
    };

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.titulo}>Inicio de Sesion</Text>

                <Text style={styles.label}>Nombre de Usuario</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu nombre de usuario"
                    value={nombreUsuario}
                    onChangeText={setNombreUsuario}
                    autoCapitalize="words"
                />

                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <View style={styles.botonesContainer}>
                    <TouchableOpacity
                        style={[styles.boton, styles.botonRegistro]}
                        onPress={validarRegistro}
                    >
                        <Text style={styles.textoBoton}>Ingresar</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.textoLogin}>
                    ¿No tienes una cuenta?
                    <Text style={styles.textoLoginLink}> Registrarse</Text>
                </Text>
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
    textoLogin: {
        marginTop: 20,
        textAlign: 'center',
        color: 'white',
    },
    textoLoginLink: {
        color: 'black',
        fontWeight: 'bold',
    },
});