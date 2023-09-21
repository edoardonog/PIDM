import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Cadastro from "./Cadastro";
import Perfil from "./Perfil";
import IMC from "./IMC";
import Resultado from "./Resultado";
import Sobre from "./Sobre";

const Stack = createNativeStackNavigator();

const MainScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Perfil" component={Perfil} />
                <Stack.Screen name="IMC" component={IMC} />
                <Stack.Screen name="Sobre" component={Sobre} />
                <Stack.Screen name="Resultado" component={Resultado} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainScreen;