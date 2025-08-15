import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../../../theme/appTheme';
import { TouchableOpacity } from 'react-native';

interface Props {
    visible: boolean;
    item: Product;
    setShowModal: () => void;
    updateStock: (id: number, quantity: number) => void;
}

export const ModalProduct = ({ visible, item, setShowModal, updateStock }: Props) => {

    const { width } = useWindowDimensions();
    
    //hook para manejar el estado del contador
    const [quantity, setQuantity] = useState<number>(1);
    //funcion para agregar al carrito
    const handleAddCart = () => {
        //llamar la funcion para actualizar el stock
        updateStock(item.id, quantity);
        //cerrar modal
        setShowModal();
        //reiniciar contador
        setQuantity(1);
    }

    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={globalStyles.containerModal}>
                <View style={{
                    ...globalStyles.modal,
                    width: width * 0.80
                }}>
                    <View style={globalStyles.headreModal}>
                        <View style={localstyles.itemName}>
                            <Text style={globalStyles.titleModel}>{item.name} - ${item.price.toFixed(2)}</Text>
                        </View>
                        <View style={globalStyles.containerIconModal}>
                            <Icon name='cancel'
                                size={22} color='#d80906b0'
                                onPress={setShowModal} />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{ uri: item.pathImage }}
                            style={globalStyles.imageModal} />
                    </View>

                    {
                        (item.stock == 0)
                            ? <Text style={globalStyles.textStock}>Producto Agotado</Text>
                            :
                            <View>

                                <View style={globalStyles.containerQuantity}>
                                    <TouchableOpacity
                                        style={globalStyles.buttonQuantity}
                                        onPress={() => setQuantity(quantity - 1)}
                                        disabled={quantity == 1}>
                                        <Text style={globalStyles.buttonQuantityText}>
                                            -
                                        </Text>
                                    </TouchableOpacity>

                                    <Text >{quantity}</Text>

                                    <TouchableOpacity
                                        style={globalStyles.buttonQuantity}
                                        onPress={() => setQuantity(quantity + 1)}
                                        disabled={quantity == item.stock}>
                                        <Text style={globalStyles.buttonQuantityText}>
                                            +
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={globalStyles.textQuantity}>
                                        Total: ${(item.price * quantity).toFixed(2)}
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={globalStyles.buttonAddCar}
                                        onPress={handleAddCart}>
                                        <Text style={globalStyles.buttonAddCarText}>Agregar Carrito</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    }
                </View>
            </View>

        </Modal>
    )
};

const localstyles = StyleSheet.create({
     itemName: {
        flex: 11,
    }
})
