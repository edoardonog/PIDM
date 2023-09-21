import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 12,
        scrollView: {
            marginHorizontal: 12,
        },
    },

    header: {
        backgroundColor: '#fff',
        height: 108,
    },

    logo: {
        alignSelf: 'center',
        marginTop: 24,
    },

    title: {
        color: '#303030',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 12,
    },

    titleCenter: {
        color: '#303030',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 12,
        marginVertical: 24,
    },

    button: {
        marginTop: 24,
        width: 108,
        height: 120,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 12,
    },

    buttonConfirm: {
        height: 40,
        backgroundColor: '#3E69F5',
        margin: 6,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        fontSize: 14,
    },

    buttonLabel: {
        alignSelf: 'flex-start',
        marginTop: 12,
        marginLeft: 12,
        color: '#303030',
        fontWeight: 'bold',
    },

    buttonConfirmLabel: {
        alignSelf: 'center',
        color: '#f7f7f7',
        fontWeight: 'semibold',
    },

    buttonText: {
        alignSelf: 'flex-start',
        marginLeft: 12,
        marginTop: 1.5,
        color: '#909090',
    },

    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    buttonNav: {
        marginTop: 24,
        height: 24,
        paddingLeft: 18,
        paddingRight: 18,
        borderRadius: 100,
    },

    buttonNavLabel: {
        color: '#707070',
    },

    buttonNavActive: {
        backgroundColor: '#E4E9FA',
        marginTop: 24,
        height: 24,
        paddingLeft: 18,
        paddingRight: 18,
        borderRadius: 100,
    },

    buttonNavLabelActive: {
        color: '#3E69F5',
        fontWeight: 'bold',
    },

    image: {
        flexDirection: "column",
        alignSelf: 'center',
        margin: 48,
    },

    icon: {
        alignSelf: 'flex-start',
        marginTop: 12,
        marginLeft: 12,
        height: 24,
        width: 24,
    },

    iconA: {
        alignSelf: 'flex-start',
        marginTop: 12,
        marginLeft: 12,
        height: 24,
        width: 30,
    },

    input: {
        height: 40,
        backgroundColor: '#fff',
        margin: 6,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 14,
    },

    avatar:{
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#E4E9FA',
    },

    info:{
        fontSize: 14,
        marginVertical: 6,
        marginHorizontal: 12,
        alignSelf: 'center',
        color: '#303030',
    }
})

export default style