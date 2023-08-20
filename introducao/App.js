import { StyleSheet, View } from 'react-native';
import HelloRn from './components/01HelloRN';
import HelloRN2 from './components/02HelloRN2';

export default function App() {
  return (
    <View style={styles.container}>
      <HelloRN2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});