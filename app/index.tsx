import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
      source={require('../img/biscoitoAberto.png')}
      resizeMode='center'
      style={styles.logo}/>

      <View style={styles.tituloContainer}>
        <Text style={[styles.titulo, styles.destaque]}>Lucky</Text>
        <Text style={styles.titulo}>Store</Text>
      </View>

      <Text style={styles.text}>Loja da sorte!!!</Text>

      

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
  }
})

