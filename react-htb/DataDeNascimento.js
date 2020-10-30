import React from 'react';
import {View, Button, Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default class Nascimento extends React.Component{
  state={
    visibility:false,
    DateDisplay:""
  }


  onPressCancel=()=>{
    this.setState({visibility:false})
  }

  handleConfirm=(date)=>{
    this.setState({DateDisplay:date.toUTCString()})
    this.setState({visibility:false})
  }

  onPressButton=()=>{
    this.setState({visibility:true})
  }


  render(){
    return(
      <View>
        <Button title="Seleciona uma data" onPress={this.onPressButton}/>
        <Text>Data selecionada:{this.state.DateDisplay}</Text>
        <DateTimePickerModal
          isVisible={this.state.visibility}
          onConfirm={this.handleConfirm}
          onCancel={this.onPressCancel}
          mode="date"
        />
      </View>
    )
  }
} 