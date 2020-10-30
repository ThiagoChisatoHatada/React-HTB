import React from 'react';
import {View, Button, Text,TextInput,ScrollView,TouchableHighlight,Alert,StyleSheet} from 'react-native';
import DatePicker from 'react-native-modal-datetime-picker';

export default class TelaCadastro extends React.Component{



  state = {
    nome: '',
    email: '',
    DateDisplay:'',
    duvida: '',
    visibility:false,
    validate:false,
  }

validate = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    console.log("Email is Not Correct");
    this.setState({ email: text })
    this.setState({validate: false})
    return false;
  }
  else {
    this.setState({ email: text })
    this.setState({validate: true})
    console.log("Email is Correct");
  }
}

  changeNome(nome){
    this.setState({nome})
  }

  changeEmail(email){
    this.setState({email})
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

  changeDuvida(duvida){
    this.setState({duvida})
  }

  handleChangeNome = (n)=>{
        this.setState({
          nome:n.target.value
        })
  } 

  handleChangeEmail = (e)=>{
        this.setState({
          email:e.target.value
        })
  }

  handleChangeData = (dat)=>{
        this.setState({
          DateDisplay:dat.target.value
        })
  }

  handleChangeDuvida = (d)=>{
        this.setState({
          duvida:d.target.value
        })
  }
  
cadastrarApertar(){
  if(this.state.nome && this.state.email && this.state.duvida){
    Alert.alert('Cadastrado com sucesso!')
  }else{
    Alert.alert('Erro.')
  }
}
  render(){
    return(
      
      <View>
                <Text style={styles.text}>Caso possua alguma duvida sobre o tema envie por aqui e receba a resposta por email{"\n"}</Text>
                <Text>Nome:</Text>
                 <TextInput placeholder={'Digite seu nome'} 
                 style={styles.textInput} 
                 value={this.state.nome}
                 onChange={this.handleChangeNome}
                 onChangeText={(nome)=>this.changeNome(nome)}/>
               
               <Text>{"\n"}Email:</Text>
                 <TextInput 
                 placeholder={'Digite seu email'} 
                 style={styles.textInput} 
                 value={this.state.email}
                 onChange={this.handleChangeEmail}
                 onChangeText={(text) => this.validate(text)}/>
              <Text>Somente formato de e-mail padrão.</Text>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:20}}>
        <Button title="Seleciona uma data" onPress={this.onPressButton}/>
        <Text>Obs:A data selecionada pode estar errada por conta do fuso do app.</Text>
        <DatePicker
          isVisible={this.state.visibility}
          onConfirm={this.handleConfirm}
          onCancel={this.onPressCancel}
          onChange={this.handleChangeData}
          dateFormat="DD/MM/YYYY"
          mode="date"
          locale="pt_BR"
          maximumDate={new Date()}
        />
        <Text>Data selecionada:{this.state.DateDisplay}</Text>
        </View>

        <Text>{"\n"}Duvida:</Text>
                 <TextInput 
                 multiline={true} 
                 style={styles.duvidaInput} 
                  placeholder={'Digite sua duvida'} 
                  value={this.state.duvida}
                  onChange={this.handleChangeDuvida}
                  onChangeText={(duvida)=>this.changeDuvida(duvida)}/>

                 <View style={{width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:20}}>
                 
                 <Button disabled={this.state.email.length<1||this.state.nome.length<1||this.state.duvida.length<1||this.state.DateDisplay==""||this.state.validate==false} 
                 color="#4169E1" 
                 onPress={()=>this.cadastrarApertar} 
                 title="Cadastrar"/>
                 
                 </View>
      </View>
                
    )
  }
  
} 

const styles = StyleSheet.create({
 
 text:{
   color:'#1a1a1a',
    justifyContent: 'center',
    fontSize: 18,
    marginHorizontal: 18,
    marginBottom: 20,
    alignItems: 'center'
 },
  textInput: { height: 40,
   width: '100%', 
   borderColor: 'gray', 
   borderWidth: 2 , 
   borderRadius: 20
   },
  duvidaInput:{ height: 100, 
  width: '100%', 
  borderColor: 'gray', 
  borderWidth: 2 , 
  borderRadius: 20,
  textAlignVertical: "top"} 
});