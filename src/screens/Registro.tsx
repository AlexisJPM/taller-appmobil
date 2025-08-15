import React, { useState } from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert
} from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../theme/appTheme';
import { User } from '../navigation/StackNavigator';

interface Props {
    users: User[];
    addUser: (user: User) => void;
}

interface FormRegister {
    name: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const Registro = ({ users, addUser }: Props) => {
    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true)
    const [hiddenCPassword, setHiddenCPassword] = useState<boolean>(true)

    //funcion para actualizar el formulario
    const changeForm = (property: string, value: string): void => {
        setFormRegister({ ...formRegister, [property]: value });
    };

    //función para verificar si existe el usuario
    const verifyUsername = (): User | undefined => {
        const existUsername = users.find(user => user.username == formRegister.username);
        return existUsername;
    }

    //función para generar los ids de los nuevos usuarios
    const getIdUser = (): number => {
        const getId = users.length + 1;
        return getId;
    }

    const handleRegister = () => {
        if (!formRegister.name || !formRegister.username || !formRegister.email
            || !formRegister.password || !formRegister.confirmPassword) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        if (formRegister.password !== formRegister.confirmPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden');
            return;
        }

        //Validar que no exista el usuario
        if (verifyUsername() != undefined) {
            Alert.alert('Error', 'El usuario ya existe');
            return;
        }

        //Crear nuevo usuario - objeto User
        const newUser: User = {
            id: getIdUser(),
            name: formRegister.name,
            username: formRegister.username,
            email: formRegister.email,
            password: formRegister.password,
            confirmPassword: formRegister.confirmPassword
        }

        //Añadir en el arreglo
        addUser(newUser);
        Alert.alert('Éxito', 'Usuario registrado correctamente');
        
        navigation.goBack();
    };

    const navigation = useNavigation();

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.titulo}>Registro</Text>

                <Text style={styles.label}>Nombre completo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu nombre"
                    onChangeText={(value) => changeForm('name', value)}
                    value={formRegister.name}
                />

                <Text style={styles.label}>Nombre de Usuario</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu nombre de usuario"
                    onChangeText={(value) => changeForm('username', value)}
                    value={formRegister.username}
                />

                <Text style={styles.label}>Correo electrónico</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa tu email"
                    onChangeText={(value) => changeForm('email', value)}
                    value={formRegister.email}
                    keyboardType="email-address"
                />

                <View>
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Crea una contraseña"
                        onChangeText={(value) => changeForm('password', value)}
                        value={formRegister.password}
                        secureTextEntry={hiddenPassword}
                    />
                    <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'}
                        size={30}
                        style={styles.iconForm}
                        onPress={() => setHiddenPassword(!hiddenPassword)} />

                    <Text style={styles.label}>Confirmar contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Repite tu contraseña"
                        onChangeText={(value) => changeForm('confirmPassword', value)}
                        value={formRegister.confirmPassword}
                        secureTextEntry={hiddenCPassword}
                    />
                    <Icon name={hiddenCPassword ? 'visibility' : 'visibility-off'}
                        size={30}
                        style={styles.iconForm2}
                        onPress={() => setHiddenCPassword(!hiddenCPassword)} />
                </View>

                <View style={styles.botonesContainer}>
                    <TouchableOpacity
                        style={[styles.boton, styles.botonRegistro]}
                        onPress={handleRegister}>
                        <Text style={styles.textoBoton}>Registrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.boton, styles.botonCancelar]}>
                        <Text style={styles.textoBoton}>Cancelar</Text>
                    </TouchableOpacity>
                </View>

                <Text style={globalStyles.textoLogin}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Inicio' }))}>
                    <Text style={globalStyles.textoLoginLink}> Inicia sesión</Text>
                </TouchableOpacity>
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
    iconForm: {
        position: 'absolute',
        bottom: 115,
        right: 20
    },
    iconForm2: {
        position: 'absolute',
        bottom: 25,
        right: 20
    }
});