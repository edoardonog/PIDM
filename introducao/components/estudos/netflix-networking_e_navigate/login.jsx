import { View, Text, Image, StyleSheet, Button, FlatList, Pressable, TextInput } from 'react-native'
import { useEffect, useState } from 'react'

const Login = ({navigation}) => {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log-in</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setNome(text)}
                placeholder="Seu nome"
                value={nome}
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setSenha(text)}
                placeholder="Sua senha"
                value={senha}
            />
            <Pressable 
                onPress={()=>navigation.navigate('Filmes',{nome})}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Entrar →</Text>
            </Pressable>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131313',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 48,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E50914',
        marginBottom: 20,
    },

    body: {
        fontSize: 16,
        color: '#f9f9f9',
        marginBottom: 25,
    },

    list: {
        flex: 1,
        width: 360,
    },

    movieTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f9f9f9',
        margin: 10,
    },

    year: {
        fontSize: 12,
        color: '#909090',
        margin: 10,
    },

    card: {
        backgroundColor: '#101010',
        width: 360,
        marginVertical: 6,
        borderRadius: 12,
    },

    button: {
        margin: 10,
        width: 280,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E50914',
        borderRadius: 3,
    },

    buttonText: {
        color: '#f5f5f5'
    },

    input: {
        height: 40,
        width: 280,
        backgroundColor: '#505050',
        color: '#f9f9f9',
        margin: 4,
        padding: 10,
        borderColor: '#909090',
        borderWidth: 1,
        borderRadius: 3,
        fontSize: 16,
    },
})