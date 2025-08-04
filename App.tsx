import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Registro } from './src/screens/Registro';
import { InicioSesion } from './src/screens/InicioSesion';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <Registro/>
    {/* <InicioSesion/> */}
    </SafeAreaView>
  )
}

export default App;