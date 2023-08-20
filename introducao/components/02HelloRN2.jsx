import {View, Text, Image, TextInput} from "react-native"

const HelloRN2 = () => {
    return (
        <View>
            <Text
                style={{
                    fontWeight:'bold',
                    fontSize: 15,
                }}
            >
                Gatinhos
            </Text>
            <Image
                source={{url:'assets/p_cat2.png'}}
                style={{width: 200, height: 200}}
            />
            <TextInput
                style={{
                    height: 50,
                    width: 200,
                    borderColor: 'grey',
                    borderWidth: 2,
                    borderRadius: 5,
                    padding: 10,
                    fontSize: 20,
                }}
            >
            </TextInput>
        </View>
    )
}

export default HelloRN2