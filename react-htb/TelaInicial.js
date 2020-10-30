import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper' 

import {trocarTextoStore} from './components/store'

function TelaInicialRedux() {

    const [texto, setTexto] = useState(trocarTextoStore.getState().texto);


    function invokeText(index){
      if(index==0){
        trocarTextoStore.dispatch({type: 'TEXTO1'})
        setTexto(trocarTextoStore.getState().texto)
      }
      else if(index==1){
        trocarTextoStore.dispatch({type: 'TEXTO2'})
        setTexto(trocarTextoStore.getState().texto)
      }
      else{
        trocarTextoStore.dispatch({type: 'TEXTO3'})
        setTexto(trocarTextoStore.getState().texto)
      }

    }

    return (
    <Swiper style={styles.wrapper} 
              showsButtons={true} 
              loop={false}
              onIndexChanged={(index) => (invokeText(index))}>
    <View style={styles.slide}>
    <View style ={{border: 'solid', borderColor: '#1a1a1a', borderRadius: 20, padding: 20}}>
       <Text style={styles.text}>{texto}</Text>
    </View>
    </View>
    <View style={styles.slide}>
      <View style ={{border: 'solid', borderColor: '#1a1a1a', borderRadius: 20, padding: 20}}>
       <Text style={styles.text}>{texto}</Text>
       </View>
    </View>
    <View style={styles.slide}>
      <View style ={{border: 'solid', borderColor: '#1a1a1a', borderRadius: 20, padding: 20}}>
       <Text style={styles.text}>{texto}</Text>
       </View>
    </View>
    </Swiper>
    );
  }

const styles = StyleSheet.create({
  wrapper: {
  },
 
  text: {
    color: '#1a1a1a',
    justifyContent: 'center',
    fontSize: 18,
    marginHorizontal: 18,
    marginBottom: 20,
    alignItems: 'center'
  }
});

export{
  TelaInicialRedux
}