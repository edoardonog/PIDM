import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import { useState } from 'react';
import style from './Style';

const Cadastro = ({ navigation }) => {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [email, setEmail] = useState('')

    return (
        <View>
            <View>
                <Image
                    source={require('./assets/illustra2.png')}
                    style={style.image}
                />
                <Text style={style.titleCenter}>Cadastre-se na BodyStat!</Text>
            </View>

            <TextInput
                style={style.input}
                onChangeText={text => setNome(text)}
                placeholder="Seu nome"
                value={nome}
            />
            <TextInput
                style={style.input}
                onChangeText={text => setIdade(text)}
                placeholder="Sua idade"
                value={idade}
            />
            <TextInput
                style={style.input}
                onChangeText={text => setEmail(text)}
                placeholder="Seu e-mail"
                value={email}
            />

            <TouchableHighlight onPress={() => navigation.navigate('Perfil', { nome, idade, email })} underlayColor="none">
                <View style={style.buttonConfirm}>
                    <Text style={style.buttonConfirmLabel}>Cadastrar</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default Cadastro;