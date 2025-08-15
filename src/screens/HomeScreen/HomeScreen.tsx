import React, { useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View, Alert } from 'react-native';
import { CardProduct } from './components/CardProduct';
import { BodyComponent } from '../../components/BodyComponent';
import { TitleComponent } from '../../components/TitleComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalCart } from './components/ModalCart';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}
//interface para los objetos del carrito de compras
export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {

    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 2, name: 'Funda de azucar', price: 2.70, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKihefTluhIihdMlrB9e1fzZ_CEkAo_3AVoQ&s' },
        { id: 3, name: 'Funda de papas', price: 2.00, stock: 3, pathImage: 'https://images.rappi.com.ec/products/1107527-1609187749932.png?e=webp&q=80&d=130x130' },
        { id: 4, name: 'Funda de fideos', price: 1.40, stock: 8, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/77563_G.jpg' },
        { id: 5, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 6, name: 'Funda de azucar', price: 2.70, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKihefTluhIihdMlrB9e1fzZ_CEkAo_3AVoQ&s' },
        { id: 7, name: 'Funda de papas', price: 2.00, stock: 3, pathImage: 'https://images.rappi.com.ec/products/1107527-1609187749932.png?e=webp&q=80&d=130x130' },
        { id: 8, name: 'Funda de fideos', price: 1.40, stock: 8, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/77563_G.jpg' },
        { id: 9, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 10, name: 'Funda de azucar', price: 2.70, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKihefTluhIihdMlrB9e1fzZ_CEkAo_3AVoQ&s' },
    ];

    //hook para manejar la lista de productos
    const [productsList, setProductList] = useState<Product[]>(products); //arreglo lista de productos actualizados

    //hook usesate para gestionar los productos de carrito
    const [cart, setCart] = useState<Cart[]>([]);

    //hook usestate para manejar el estado del modalcart
    const [showModal, setShowModal] = useState<boolean>(false);

    //funcion para actualizar el stock de los productos
    const updateStock = (id: number, quantity: number): void => {
        const updatedProducts = productsList.map(product => (product.id == id)
            ? { ...product, stock: product.stock - quantity }
            : product);
        //actualizar el arreglo de productos
        setProductList(updatedProducts);
        //llamar funcion para anadir al carrito
        addProduct(id, quantity);
    }

    //funcion para agregar los productos al arreglo del carrito de compras
    const addProduct = (id: number, quantity: number): void => {
        const product = productsList.find(product => product.id == id);

        //validar q ue el producto exista
        if (!product) {//producto -> undefined
            return;
        }
        //crear objeto del producto para el carrito de compras 
        const newProductCart: Cart = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price * quantity
        }
        //anadir el arreglo al carrito de compras 
        setCart([...cart, newProductCart]);
        //console.log(cart);
    }

    return (

        <View>
            <StatusBar backgroundColor='red' />
            <View style={styles.constinerHeader}>
                <TitleComponent title='Productos' />
                <View style={styles.containerIcon}>
                    <View style={styles.containerIcon}>
                        <Icon name='shopping-cart'
                            size={45}
                            color='black'
                            style={styles.iconForm}
                            onPress={() => {
                            if (cart.length === 0) {
                                Alert.alert('Carrito vacío', 'No hay productos en el carrito');
                            } else {
                                setShowModal(!showModal);
                            }
                        }} />
                    </View>
                    {cart.length > 0 && (
                        <Text style={styles.textIconCar}>{cart.length}</Text>
                    )}
                </View>
            </View>
            <BodyComponent>
                <FlatList
                    data={productsList}
                    renderItem={({ item }) => <CardProduct item={item} updateStock={updateStock} />}
                    keyExtractor={item => item.id.toString()}
                />
            </BodyComponent>
            <ModalCart visible={showModal}
                setShowModal={() => setShowModal(!showModal)}
                cart={cart}
                resetCart={() => setCart([])}/>
        </View>
    )
};

const styles = StyleSheet.create({
    constinerHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerIcon: {
        flex: 1,
    },
    textIconCar: {
        backgroundColor: '#04687F',
        paddingHorizontal: 5,
        borderRadius: 25,
        fontWeight: 'bold',
        fontSize: 12,
        color: 'white',
        position: 'absolute',
        top: 38,
        right: 93,
    },
    iconForm: {
        position: 'absolute',
        top: 45,
        right: 80,
    }

})
