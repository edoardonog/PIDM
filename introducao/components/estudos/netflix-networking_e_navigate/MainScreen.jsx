import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Filmes from "./filmes";
import Login from "./login";

const Stack = createNativeStackNavigator();

const MainScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Filmes" component={Filmes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainScreen;