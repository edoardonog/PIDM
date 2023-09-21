import {View, Text, TouchableHighlight, Image} from 'react-native';
import style from './Style';

const Sobre = ({navigation}) => {
    return (
        <View>
            <Image
                source={require('./assets/logo2.png')}
                style={style.logo}
            />

            <Text style={style.info}>Na busca pela melhor versão de você mesmo, o BodyStat é seu aliado. Promovemos o equilíbrio e a saúde através do conhecimento do seu corpo. Juntos, alcançaremos suas metas de bem-estar.</Text>
        
            <TouchableHighlight onPress={() => navigation.navigate('Home')} underlayColor="none">
                <View style={style.buttonConfirm}>
                    <Text style={style.buttonConfirmLabel}>Voltar para Home</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default Sobre