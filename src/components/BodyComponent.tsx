import React, { ReactNode } from 'react';
import {StyleSheet, useWindowDimensions, View } from 'react-native';

interface Props {
    children: ReactNode; //children permite recibir cualquier componente hijo (Text, Image. etc)
}

export const BodyComponent = ({ children }: Props) => {
    //hook useWindowDimensions permite obtener el ancho y alto de la pantalla
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...styles.container,
            height: height * 0.83
        }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#04687F',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 40
    }
})
