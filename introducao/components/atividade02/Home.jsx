import { View, TouchableHighlight, Image, Button, Text } from 'react-native';
import style from './Style';

const Home = ({ navigation }) => {
    return (
        <View>
            <View style={style.header}>
                <Image
                    source={require('./assets/logo.png')}
                    style={style.logo}
                />
                <View style={style.buttonGroup}>
                    <TouchableHighlight onPress={() => navigation.navigate('Home')} underlayColor="none">
                        <View style={style.buttonNavActive}>
                            <Text style={style.buttonNavLabelActive}>Home</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => navigation.navigate('')} underlayColor="none">
                        <View style={style.buttonNav}>
                            <Text style={style.buttonNavLabel}>Perfil</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => navigation.navigate('')} underlayColor="none">
                        <View style={style.buttonNav}>
                            <Text style={style.buttonNavLabel}>Extras</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>

            <Image
                source={require('./assets/illustration-home.png')}
                style={style.image}
            />

            <View>
                <Text style={style.title}>Comece por aqui</Text>
            </View>

            <View style={style.buttonGroup}>
                <TouchableHighlight onPress={() => navigation.navigate('Cadastro')} underlayColor="none">
                    <View style={style.button}>
                        <Image
                            source={require('./assets/Vector.png')}
                            style={style.iconA}
                        />
                        <Text style={style.buttonLabel}>Cadastro</Text>
                        <Text style={style.buttonText}>Entre para a BodyStat</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('IMC')} underlayColor="none">
                    <View style={style.button}>
                    <Image
                            source={require('./assets/Vector-1.png')}
                            style={style.icon}
                        />
                        <Text style={style.buttonLabel}>IMC</Text>
                        <Text style={style.buttonText}>Calcule o seu IMC</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('Sobre')} underlayColor="none">
                    <View style={style.button}>
                    <Image
                            source={require('./assets/Vector-2.png')}
                            style={style.icon}
                        />
                        <Text style={style.buttonLabel}>Sobre</Text>
                        <Text style={style.buttonText}>Quem é a BodyStat?</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Home;