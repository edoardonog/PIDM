import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Questao01 from "./Questao01";
import Questao02 from "./Questao02";

const Stack = createNativeStackNavigator();

const Prova = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Lista" component={Questao01} />
                <Stack.Screen name="Modal" component={Questao02} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Prova;