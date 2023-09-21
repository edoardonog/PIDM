import { useEffect, useState } from 'react';
import { Alert, View, Text, Modal, Image, TouchableHighlight } from 'react-native';
import style from './Style';

const Resultado = ({ peso, altura, modalVisible, setModalVisible }) => {
    const [imc, setImc] = useState('')
    const [resultado, setResultado] = useState('')

    useEffect(() => {
        setImc(Number(peso) / (Number(altura) * Number(altura)))
    }, [])

    useEffect(() => {
        setImc(Number(peso) / (Number(altura) * Number(altura)))
        handleIMC()
    }, [imc,peso,altura])

    const handleIMC = () => {
        if (imc < 17) {
            setResultado("Muito abaixo do peso")
        } else if (imc >= 17 && imc <= 18.49) {
            setResultado("Abaixo do peso")
        } else if (imc >= 18.5 && imc <= 24.99) {
            setResultado("Peso normal")
        } else if (imc >= 25 && imc <= 29.99) {
            setResultado("Acima do peso")
        } else if (imc >= 30 && imc <= 34.99) {
            setResultado("Obesidade I")
        } else if (imc >= 35 && imc <= 39.99) {
            setResultado("Obesidade II (severa)")
        } else if (imc >= 40) {
            setResultado("Obesidade III (mórbida)")
        }
    }
    return (
        <View style={style.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={style.modal}>
                    <Text style={style.titleCenter}>Resultado do seu IMC</Text>

                    <Image
                        source={require('./assets/ilustra4.png')}
                        style={style.image}
                    />

                    <Text style={style.titleCenter}>Seu IMC é: {imc}</Text>
                    <Text style={style.titleCenter}>Resultado: {resultado}</Text>

                    <TouchableHighlight onPress={() => setModalVisible(!modalVisible)} underlayColor="none">
                        <View style={style.buttonConfirm}>
                            <Text style={style.buttonConfirmLabel}>Fechar Modal</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </Modal>
        </View>
    )
}

export default Resultado