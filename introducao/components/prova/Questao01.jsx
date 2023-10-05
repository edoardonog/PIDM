import { View, Text, SectionList } from "react-native"
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"

import style from "./Style"
import Dados from "./Data"

const Questao01 = () => {
    return (
        <View style={style.container}>
            <Text style={style.header}>Histórico de Compras</Text>

            <SectionList
                sections={Dados}
                keyExtractor={(item) => "SDDCeredEDDeed" + item.id}
                renderItem={
                    ({ item }) => {
                        return (
                            <View style={style.card}>
                                <IconButton
                                    icon={item.icon}
                                    iconColor={MD3Colors.tertiary0}
                                    size={30}
                                    onPress={() => console.log('Pressed')}
                                    mode="contained"
                                />
                                <View>
                                    <Text style={style.title2}>{item.nome}</Text>
                                    <Text style={style.text}>{item.hora}</Text>
                                </View>
                                <Text style={style.title2}>{item.valor}</Text>
                            </View>
                        )
                    }
                }
                renderSectionHeader={
                    ({ section }) => {
                        return (
                            <Text style={style.title}>{section.title}</Text>
                        )
                    }
                }
            />
        </View>
    )
}

export default Questao01