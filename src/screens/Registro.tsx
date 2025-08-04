import React, { useState } from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';

export const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validarRegistro = () => {
        if (!nombre || !nombreUsuario || !email || !password || !confirmPassword) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden');
            return;
        }
        Alert.alert('Éxito', 'Registro completado con éxito');
    };

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.titulo}>Registro</Text>

                <Text style={styles.label}>Nombre completo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu nombre"
                    value={nombre}
                    onChangeText={setNombre}
                    autoCapitalize="words"
                />

                <Text style={styles.label}>Nombre de Usuario</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu nombre de usuario"
                    value={nombreUsuario}
                    onChangeText={setNombreUsuario}
                    autoCapitalize="words"
                />

                <Text style={styles.label}>Correo electrónico</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Crea una contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <Text style={styles.label}>Confirmar contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Repite tu contraseña"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />

                <View style={styles.botonesContainer}>
                    <TouchableOpacity
                        style={[styles.boton, styles.botonRegistro]}
                        onPress={validarRegistro}
                    >
                        <Text style={styles.textoBoton}>Registrarme</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.boton, styles.botonCancelar]}
                    >
                        <Text style={styles.textoBoton}>Cancelar</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.textoLogin}>
                    ¿Ya tienes una cuenta?
                    <Text style={styles.textoLoginLink}> Inicia sesión</Text>
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
    botonCancelar: {
        backgroundColor: '#e74c3c',
    },
    textoBoton: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textoLogin: {
        marginTop: 20,
        textAlign: 'center',
        color: '#ddd',
    },
    textoLoginLink: {
        color: 'black',
        fontWeight: 'bold',
    },
});