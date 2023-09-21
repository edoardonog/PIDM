import { View, Text, TextInput, Button, TouchableHighlight, Image } from 'react-native';
import { useState } from 'react';
import style from './Style';

const IMC = ({ navigation }) => {
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')

    return (
        <View>
            <Image
                source={require('./assets/ilustra3.png')}
                style={style.image}
            />
            <Text style={style.titleCenter}>Calcule seu Indice de Massa Corporal!</Text>

            <TextInput
                style={style.input}
                onChangeText={text => setPeso(text)}
                placeholder="Digite seu peso em KG"
                value={peso}
                keyboardType='numeric'
            />
            <TextInput
                style={style.input}
                onChangeText={text => setAltura(text)}
                placeholder="Digite sua altura em CM"
                value={altura}
                keyboardType='numeric'
            />

            <TouchableHighlight onPress={() => navigation.navigate('Resultado', { peso, altura })} underlayColor="none">
                <View style={style.buttonConfirm}>
                    <Text style={style.buttonConfirmLabel}>Calcular IMC</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default IMC;