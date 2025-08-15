import React from 'react';
import { StyleSheet, Text, useWindowDimensions } from 'react-native';

//Componente reutilizable para el título
//Recibe props para personalizar el título
interface Props { //propiedades
    title: string;
}

export const TitleComponent = ({ title }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <Text style={{
            ...styles.title,
            height: height * 0.12
        }}>
            {title}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 27,
        fontWeight: 'bold',
        paddingVertical: 30,
        paddingHorizontal: 30,
    }
})
