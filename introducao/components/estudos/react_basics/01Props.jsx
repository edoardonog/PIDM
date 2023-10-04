import {Text, View} from 'react-native';

const ComponentePai = props => {
  return (
    <View>
      <Text> Estou passando {props.propriedade}!</Text>
    </View>
  );
};

const ComponenteFilho = () => {
  return (
    <View>
      <ComponentePai propriedade="Passei" />
    </View>
  );
};

export default ComponenteFilho;