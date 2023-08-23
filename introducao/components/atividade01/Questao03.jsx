// O código foi feito baseado na tela do Samsung Galaxy A51, com medidas de: 412 x 914

import { View, Text, StyleSheet } from "react-native"

const Questao03 = ({color}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}> TOP 4 DISCIPLINAS </Text>
            <Text style={{color: 'blue'}}> Interação Humano Computador </Text>
            <Text style={{color: 'red'}}> Tópicos Especiais em Design </Text>
            <Text style={{color: 'green'}}> Projetos Integrados </Text>
            <Text style={{color: 'orange'}}> Linguagem e Marcação de Scripts </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 412,
        height: 914,
        flex: 1,
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tittle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#131313',
        marginBottom:20,
    },
})

export default Questao03