import { Link, router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/Button/button'



export default function index() {

  function handlePressButton(){
    router.replace('./home');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
      source={require('../img/biscoitoAberto.png')}
      resizeMode='center'
      style={styles.logo}/>

      <View style={styles.buttonAreaContainer}>
        <View style={styles.tituloContainer}>
          <Text style={[styles.titulo, styles.destaque]}>Lucky</Text>
          <Text style={styles.titulo}>Store</Text>
        </View>

        <Text style={styles.text}>Loja da sorte!!!</Text>
        <Button text="Começar as Compras" function={handlePressButton}></Button>
      </View>

      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    width:50,
    height:50,
  },
  titulo:{
    fontSize:32,
    fontWeight:'900'
  },
  text:{
    fontSize:16
  },
  tituloContainer:{
    flexDirection:'row',
    gap:4
  },
  destaque:{
    color:"#E67A31"
  },
  buttonAreaContainer:{
    gap:16,
    justifyContent:'center',
    alignItems:'center'
  }
});

