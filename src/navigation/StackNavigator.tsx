import { createStackNavigator } from '@react-navigation/stack';
import { InicioSesion } from '../screens/InicioSesion';
import { Registro } from '../screens/Registro';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { useState } from 'react';


const Stack = createStackNavigator();
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    
    confirmPassword: string;
}
//Lista de usuarios
    const users: User[] = [
        {id:1, name:'Alexis', username:'Ap', email:'alexis@gmail', password:'123', confirmPassword:'123'},
        {id:2, name:'alexis', username:'ap', email:'alexis@gmail', password:'123', confirmPassword:'123'}
    ];

export const StackNavigator = () => {

  //hook useState para gestionar el estado de la lista de usuarios
    const [listUsers, setListUsers] = useState<User[]>(users);

    //función para agregar un nuevo usuario en el arreglo
    const addUser = (user: User): void => {
        setListUsers([...listUsers, user]); //añadir nuevo usuario
    }

  return (
    <Stack.Navigator
    screenOptions={{
                cardStyle: {
                    backgroundColor: '#FFC107'
                }
            }}>
      <Stack.Screen name="Inicio" options={{headerShown:false}}  children={() => <InicioSesion users={listUsers} />}/>
      <Stack.Screen name="Registro" options={{headerShown:false}} children={() => <Registro users = {listUsers} addUser={addUser}/>}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}