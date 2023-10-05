import { View, Text } from "react-native"
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"


import style from "./Style"

const Questao02 = () => {
    return (
        <View style={style.containerModal}>
            <View style={style.modalCard}>
                <IconButton
                    icon={'medical-bag'}
                    iconColor={MD3Colors.tertiary0}
                    size={30}
                    onPress={() => console.log('Pressed')}
                    mode="contained"
                />
                <Text style={style.titleModal}>Drogasil</Text>
                <Text style={style.priceModal}>R$ 151,37</Text>
                <Text style={style.infoModal}> 25 de Set</Text>
                <Text style={style.infoModal}>17:22</Text>

            </View>
        </View>
    )
}

export default Questao02