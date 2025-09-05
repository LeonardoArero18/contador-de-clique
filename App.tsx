import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);

  const aumentarContador=() => {
    setContador(contador + 1);
  }

  const diminuirContador=() => {
    setContador(contador - 1);
  } 


  return (
    <View style={styles.container}>
      <Text>Contador</Text>
      <Button title='Aumentar' onPress={aumentarContador}/>
      <Text>{contador}</Text>
      <Button title='Diminuir' onPress={diminuirContador}/>
      <StatusBar style="auto" />
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
