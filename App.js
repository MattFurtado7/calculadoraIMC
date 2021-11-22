import React, { useState } from 'react';
import {  View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function executarCalculos(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    if (imc < 18.6){
      alert('Voce esta abaixo do peso - IMC = ' + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9){
      alert('Voce esta com o peso ideal - IMC = ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9){
      alert('Voce esta levemente acima do peso - IMC = ' + imc.toFixed(2));
    } else if (imc >= 34.9){
      alert('Voce esta acima do peso - IMC = ' + imc.toFixed(2));
    }

    setPeso('');

    setAltura('');

  }

  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Calcule seu IMC</Text>

      <TextInput
        style={estilo.input}
        value={peso}
        onChangeText={ (peso) => setPeso(peso) }
        placeholder="Peso(kg)"
        keyboardType="numeric"
      />


      <TextInput
        style={estilo.input}
        value={altura}
        onChangeText={ (altura) => setAltura(altura) }
        placeholder="altura(cm)"
        keyboardType="numeric"
      />      


      <TouchableOpacity style={estilo.botao} onPress={executarCalculos}>
        <Text style={estilo.textoBotao}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30
  },
  input: {
    backgroundColor: '#DDD',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41AEF4'
  },
  textoBotao: {
    color: '#FFF',
    fontSize: '25'
  }
});
