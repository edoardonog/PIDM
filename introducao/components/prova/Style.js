import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 64,
        backgroundColor: '#131313',
    },

    containerModal: {
        flex: 1,
        paddingTop: 64,
        backgroundColor: '#131313',
    },

    card:{
        flex:1,
        flexDirection: 'row',
        paddingVertical: 12,
        borderColor: '#959595',
        borderBottomWidth:1,
    },

    header:{
        color:'#f9f9f9',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 12,
    },

    title: {
        color:'#f9f9f9',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 12,
        paddingTop: 48,
    },

    title2: {
        color:'#f9f9f9',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 12,
    },

    text: {
        color: '#858585',
        fontSize: 16,
        marginHorizontal: 12,
    },

    modalCard: {
        padding:48,
    },

    titleModal: {
        color:'#f9f9f9',
        fontSize: 48,
        fontWeight: 'bold',
        alignSelf: 'left',
        marginVertical:12,
    },

    priceModal: {
        color:'#f9f9f9',
        fontSize: 48,
        fontWeight: 'bold',
        alignSelf: 'left',
    },

    infoModal: {
        color: '#ededed',
        fontSize: 20,
        marginTop: 6,
    }
})

export default style