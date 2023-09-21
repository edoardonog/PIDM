import {View, Text, Button, Image, TouchableHighlight} from 'react-native';
import style from './Style';

const Perfil = ({route, navigation}) => {
    const {nome, idade, email} = route.params
    return (
        <View>
            <View style={style.header}>
                <Image
                    source={require('./assets/logo.png')}
                    style={style.logo}
                />
                <View style={style.buttonGroup}>
                    <TouchableHighlight onPress={() => navigation.navigate('Home')} underlayColor="none">
                        <View style={style.buttonNav}>
                            <Text style={style.buttonNavLabel}>Home</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => navigation.navigate('')} underlayColor="none">
                        <View style={style.buttonNavActive}>
                            <Text style={style.buttonNavLabelActive}>Perfil</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => navigation.navigate('')} underlayColor="none">
                        <View style={style.buttonNav}>
                            <Text style={style.buttonNavLabel}>Extras</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>

            <Text style={style.titleCenter}>Perfil</Text>
            
            <Image
                style={style.avatar}
                source={{uri: 'https://avatars.githubusercontent.com/u/2007006?v=4'}}
            />
            
            <Text style={style.info}>Nome: {nome}</Text>
            <Text style={style.info}>Idade: {idade}</Text>
            <Text style={style.info}>Email: {email}</Text>

            <TouchableHighlight onPress={() => navigation.navigate('Home')} underlayColor="none">
                <View style={style.buttonConfirm}>
                    <Text style={style.buttonConfirmLabel}>Voltar para Home</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default Perfil