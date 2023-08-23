// O código foi feito baseado na tela do Samsung Galaxy A51, com medidas de: 412 x 914

import { View, Text, Image, StyleSheet, Button } from 'react-native'
import {useState} from 'react'

import img1 from 'introducao/components/atividade01/assets/foto-q02.png'
import img2 from 'introducao/components/atividade01/assets/foto-q04.jpg'

const Questao01 = () => {
    const [image, setImage] = useState(img1)
    
    const changeImage = () => {
        if (image === img1) {
            setImage(img2)
        } else {
            setImage(img1)
        }
    }

    return (
        <View style={style.container}>
            <Image
                source={image}
                style={{
                    width: 150,
                    height: 200,
                    margin: 20,
                }}
            />

            <Text style={style.nome}> Edoardo Leitão Nogueira </Text>
            <Text style={style.cidade}> Quixeramobim - Ceará </Text>
            <Text style={style.curso}> Design Digital - 6º Semestre </Text>

            <Button
                onPress={changeImage}
                title='Trocar foto'
                color='blue'
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: 412,
        height: 914,
        flex: 1,
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',
    },

    nome: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    cidade: {
        fontSize: 12,
    },

    curso: {
        fontSize: 12,
        color: '#C70039',
    },
});

export default Questao01