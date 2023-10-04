import {View, Text, Button, StyleSheet} from 'react-native'
import { useState } from "react"

const State = () => {

    const [estado, setEstado] = useState(0)

    return (
        <View style={{marginTop:20}}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                Verificador de Estado: {estado}
            </Text>
            <Button
                title="Mudar Estado"
                onPress={
                    () => {
                        setEstado(estado +1)
                    }
                }
            />
        </View>
    )
}
export default State;