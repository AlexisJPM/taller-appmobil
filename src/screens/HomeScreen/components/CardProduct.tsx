import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProduct } from './ModalProduct';

interface Props {
    item: Product;
    updateStock: (id: number, quantity: number) => void;
}

export const CardProduct = ({ item, updateStock }: Props) => {
    //hook useState manejar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View>
            <View style={styles.container}>
                <Image source={{ uri: item.pathImage }} style={styles.image} />
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.title}>Precio: ${item.price.toFixed(2)}</Text>
                </View>
                <View style={styles.containerIcon}>
                    <Icon name='add-shopping-cart'
                        size={35}
                        color='black'
                        onPress={() => setShowModal(!showModal)} />
                </View>
            </View>
            <ModalProduct
                visible={showModal}
                item={item}
                setShowModal={() => setShowModal(!showModal)}
                updateStock={updateStock} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#3a3b37ff',
        marginBottom: 15
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft:10
    },
    image: {
        width: 70,
        height: 70
    },
    containerIcon: {
        flex: 1,
        //backgroundColor:'red'
        alignItems: 'flex-end'
    }
})