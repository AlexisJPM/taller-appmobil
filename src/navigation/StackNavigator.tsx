import { createStackNavigator } from '@react-navigation/stack';
import { InicioSesion } from '../screens/InicioSesion';
import { Registro } from '../screens/Registro';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={InicioSesion} options={{headerShown:false}}/>
      <Stack.Screen name="Registro" component={Registro} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}