import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    
    textoLogin: {
        marginTop: 20,
        textAlign: 'center',
        color: '#ddd',
    },
    textoLoginLink: {
        textAlign:'center',
        color: 'black',
        fontWeight: 'bold',
        marginVertical:10,
    },
    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    modal: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10
    },
    headreModal:{
        flexDirection:'row',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        paddingVertical:10
    },
    containerIconModal:{
        //backgroundColor:'red',
        flex:1,
        alignItems:'flex-end',
    },
    titleModel:{
        fontSize:20,
        fontWeight:'bold',
        color: 'black',
    },
    imageModal:{
        width:150,
        height:150
    },
    textStock:{
        fontSize:20,
        color:'#992E2E',
        textAlign:'center',
        fontWeight:'bold',
        marginTop:5
    },
    containerQuantity:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonQuantity:{
        height:50,
        width:50,
        backgroundColor:'#04687F',
        justifyContent:'center',
        alignItems:'center',
        margin:15,
        borderRadius:15
    },
    buttonQuantityText:{
        color: 'black',
        fontSize:20,
        fontWeight:'bold'
    },
    textQuantity:{
        fontSize:20,
        //fontWeight:'bold'
    },
    buttonAddCar:{
        backgroundColor:'#FFC107',
        marginTop:15,
        paddingVertical:10,
        alignItems:'center',
        borderRadius:5
    },
    buttonAddCarText:{
        color:'black',
        fontWeight:'bold'
    }
    
})