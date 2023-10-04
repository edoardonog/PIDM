import { View, Text, Image, StyleSheet, Button, FlatList, Pressable } from 'react-native'
import {useEffect, useState} from 'react'

const Filmes = ({route,navigation}) => {
    const {nome} = route.params
    const [movies, setMovies] = useState([])

    useEffect(
        ()=>{
            getFilmes()
        }
        ,
        [] //se não tiver nada é carregado na hora que abre a página
    )

    const getFilmes = () => {
        fetch('https://reactnative.dev/movies.json')
        .then(response => response.json())
        .then(
            ({movies}) => {
            setMovies(movies)
        })
        .catch(error=>console.log(error))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>NETFLIX</Text>
            <Text style={styles.body}>Seja bem-vindo novamente {nome}</Text>
            <FlatList
                style={styles.list}
                data={movies}
                renderItem={
                    ({item}) => {
                        return(
                            <View style={styles.card}>
                                <Text style={styles.movieTitle}>{item.title}</Text>
                                <Text style={styles.year}>{item.releaseYear}</Text>
                                <Pressable style={styles.button}>
                                    <Text style={styles.buttonText}>▶ Play</Text>
                                </Pressable>
                            </View>
                        )
                    }
                }
            />
        </View>
    )
}

export default Filmes

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#131313',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 48,
    },

    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#E50914',
        marginBottom:20,
    },

    body:{
        fontSize:16,
        color:'#f9f9f9',
        marginBottom:25,
    },

    list:{
        flex:1,
        width: 360,
    },

    movieTitle:{
        fontSize:16,
        fontWeight:'bold',
        color:'#f9f9f9',
        margin:10,
    },

    year:{
        fontSize:12,
        color:'#909090',
        margin:10,
    },

    card:{
        backgroundColor:'#101010',
        width:360,
        marginVertical:6,
        borderRadius:12,
    },

    button: {
        margin: 10,
        width: 72,
        height: 24,
        alignItems: 'center',
        backgroundColor: '#E50914',
        borderRadius: 3,
    },

    buttonText: {
        color:'#f5f5f5'
    }
})