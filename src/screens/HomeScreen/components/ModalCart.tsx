import React from 'react'
import { FlatList, Modal, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../../../theme/appTheme';
import { Cart } from '../HomeScreen';
import { TouchableOpacity } from 'react-native';

interface Props {
    visible: boolean;
    setShowModal: () => void;
    cart: Cart[];
    resetCart: () => void;
}
export const ModalCart = ({ visible, setShowModal, cart, resetCart }: Props) => {
    const { width } = useWindowDimensions();

    const totalPay = ():number => {
        let total=0;
        cart.forEach(product =>{
            total += product.total
        })
        return total;
    }

    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={globalStyles.containerModal}>
                <View style={{
                    ...globalStyles.modal,
                    width: width * 0.90
                }}>
                    <View style={globalStyles.headreModal}>
                        <Text style={globalStyles.titleModel}>Mis productos</Text>
                        <View style={globalStyles.containerIconModal}>
                            <Icon name='cancel'
                                size={22}
                                color='#d80906b0'
                                onPress={setShowModal} />
                        </View>
                    </View>
                    <View style={localStyle.headerTable}>
                        <Text style={localStyle.headerTextTable}>Producto</Text>
                        <View style={localStyle.headerInformation}>
                            <Text style={localStyle.headerTextTable2}>Pre.</Text>
                            <Text style={localStyle.headerTextTable2}>Cant.</Text>
                            <Text style={localStyle.headerTextTable2}>Total</Text>
                        </View>
                    </View>

                    <View>
                        <FlatList
                            data={cart}
                            renderItem={({ item }) => (
                                <View style={localStyle.itemContainer}>
                                    <Text style={localStyle.itemName}>{item.name}</Text>
                                    <View style={localStyle.itemDetails}>
                                        <Text style={{ paddingHorizontal: 15 }}>${item.price.toFixed(2)}</Text>
                                        <Text>{item.quantity}</Text>
                                        <Text style={{ paddingHorizontal: 15 }}>${item.total.toFixed(2)}</Text>
                                    </View>
                                </View>
                            )}
                            keyExtractor={item => item.id.toString()} />
                    </View>

                    <View style={localStyle.containerTotal}>
                        <Text style={localStyle.headerTextTable}>
                            Total pagar: ${totalPay().toFixed(2)}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={globalStyles.buttonAddCar}
                        onPress={() => {setShowModal(), resetCart()}}>
                        <Text style={globalStyles.buttonAddCarText}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const localStyle = StyleSheet.create({
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    headerInformation: {
        flexDirection: 'row',
    },
    headerTextTable: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16
    },
    headerTextTable2: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
        marginHorizontal: 9
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 7,
        borderBottomWidth: 2,
        borderBottomColor: '#eee'
    },
    itemName: {
        flex: 2,
        fontWeight: 'bold'
    },
    itemDetails: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerTotal: {
        alignItems: 'center',
        marginTop: 15,
        backgroundColor:'#eee',
        padding:7
    }
})