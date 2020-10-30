import React,{Component} from 'react';
import { Text
, View
, StyleSheet
, Button
, Image
, ScrollView
,Linking} from 'react-native';
import Constants from 'expo-constants'
import {TelaInicialRedux} from './TelaInicial';
import TelaCadastro from './TelaCadastro';
//importações do React Navigation
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';



//módulo do Tab Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//biblioteca de icones
import { Ionicons } from '@expo/vector-icons';

//módulo do Navigation Drawer
import {createDrawerNavigator} from '@react-navigation/drawer';

//uso de Hooks para criação de objetos
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//import da api do prjeto
//header da home
function LogoTitle() {
  //uso do navigation para acionar o Drawer
  const navigation = useNavigation();
  
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Image
        style={{ width: 200, height: 50, marginLeft:50 }}
        source={require('./images/HTB.png')}
      />
    </View>
  );
}


//tela inicial
function TelaInicial() {
  //objeto de controle de navegação
  const navigation = useNavigation();

  return(
    <Stack.Navigator>
    <Stack.Screen
    name="Home"
    options={
      {headerTitle: props => <LogoTitle/>}}>
      {props =>
    <ScrollView>
    <View>
    <Text style={styles.intro}>Bem Vindo!</Text> 
    <TelaInicialRedux/>
    <View style={styles.container}>
      </View>
      </View>
      </ScrollView>
      }
     </Stack.Screen>
   </Stack.Navigator>
  );
}

async function searchNews(q) {
  q = encodeURIComponent(q);
  const response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=${q}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "4740144ecamsh056be16bb12d251p1bc9f3jsnd776f37330bd",
    }
  });
  const body = await response.json();
  return body.value;
}
function TelaDeNoticias() {
  const [query, setQuery] = React.useState('Doação de órgãos');
  const [list, setList] = React.useState(null);
  const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
  const search = (e) => {
    e.preventDefault();
    searchNews('Doação de órgãos').then(setList);
  };
  return (
    <Stack.Navigator>
    <Stack.Screen
    name="Noticias"
    options={
      {headerTitle: props => <LogoTitle/>}}>
      {props =>
<ScrollView>
    <View style={{ backgroundColor: '#ecf0f1',flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:20}}>
    <Button  title="Atualizar/Noticias" onPress={search}/>
      {list &&
        (list.length === 0
          ? <Text>No results</Text>
          : (
            <View style={{backgroundColor: '#ecf0f1',}}>
              {list.map(item => (
                <Text key={item.id}>
                  
                    <Text>
                    <Text style={{color:'blue'}} onPress={()=>Linking.openURL(item.url)}>{"\n"}{item.name}{"\n"}</Text>
                    <Text style={{color:'black'}}>{item.description}{"\n"}</Text>
                    <Text style={{color:'black'}}>{formatDate(item.datePublished)}{"\n"}</Text>
                    </Text>  
                </Text>
              ))}
            </View>
          )
        )
      }
    </View>
</ScrollView>
}
     </Stack.Screen>
   </Stack.Navigator>
  );
}

//tela de orgãos
function TelaDeOrgaos () {
  //objeto de controle de navegação
  const navigation = useNavigation();
  
  //recebendo dados da tela anterior
  return(
  <Stack.Navigator>
    <Stack.Screen
    name="Orgãos"
    options={
      {headerTitle: props => <LogoTitle/>}}>
      {props =>
        
    <View style={styles.container}>
    <ScrollView>
    <Text style={styles.intro}>Orgãos</Text>
      <View style={styles.item}>
      <Text style={styles.orgao} onPress={() => navigation.navigate('Coração')}>Coração</Text>
      <Text style={styles.orgao} onPress={() => navigation.navigate('Córneas')}>Córneas</Text>
      <Text style={styles.orgao} onPress={() => navigation.navigate('Fígado')}>Fígado</Text>
      <Text style={styles.orgao} onPress={() => navigation.navigate('Intestino')}>Intestino</Text>
      <Text style={styles.orgao} onPress={() => navigation.navigate('Medula Óssea')}>Medula Óssea</Text>
      <Text style={styles.orgao} onPress={() => navigation.navigate('Osso')}>Osso</Text>
      <Text style={styles.orgao} onPress={() => navigation.navigate('Pâncreas')}>Pâncreas</Text>
      <Text style={styles.orgao} onPress={() => navigation.navigate('Pulmão')}>Pulmão</Text>
      <Text style={styles.orgao} onPress={() => navigation.navigate('Pele')}>Pele</Text>
      <Text style={styles.orgao} onPress={() => navigation.navigate('Rim')}>Rim</Text> 
     </View>
    </ScrollView>
    </View>
      }
      </Stack.Screen>

      <Stack.Screen
    name="Coração">
      {props=>
      <View style={styles.container}>
          <Image style={styles.imagemOrgao} source={require('./images/coracao.png')}/>
      </View>
    }
    </Stack.Screen>

    <Stack.Screen
    name="Córneas">
      {props=>
      <View style={styles.container}>
          <Image style={styles.imagemOrgao} source={require('./images/corneas.png')}/>
      </View>
    }
    </Stack.Screen>

    <Stack.Screen
    name="Fígado">
      {props=>
      <View style={styles.container}>
        <Image style={styles.imagemOrgao} source={require('./images/figado.png')}/>
      </View>
    }
    </Stack.Screen>

    <Stack.Screen
    name="Intestino">
      {props=>
      <View style={styles.container}>
        <Image style={styles.imagemOrgao} source={require('./images/intestino.png')}/>
      </View>
    }
    </Stack.Screen>

    <Stack.Screen
    name="Medula Óssea">
      {props=>
      <View style={styles.container}>
        <Image style={styles.imagemOrgao} source={require('./images/medula.png')}/>
      </View>
    }
    </Stack.Screen>

    <Stack.Screen
    name="Osso">
      {props=>
      <View style={styles.container}>
        <Image style={styles.imagemOrgao} source={require('./images/osso.png')}/>
      </View>
    }
    </Stack.Screen>

    <Stack.Screen
    name="Pâncreas">
      {props=>
      <View style={styles.container}>
        <Image style={styles.imagemOrgao} source={require('./images/pancreas.png')}/>
      </View>
    }
    </Stack.Screen>

    <Stack.Screen
    name="Pele">
      {props=>
      <View style={styles.container}>
        <Image style={styles.imagemOrgao} source={require('./images/pele.png')}/>
      </View>
    }
    </Stack.Screen>

    <Stack.Screen
    name="Pulmão">
      {props=>
      <View style={styles.container}>
        <Image style={styles.imagemOrgao} source={require('./images/pulmoes.png')}/>
      </View>
    }
    </Stack.Screen>
    

    <Stack.Screen
    name="Rim">
      {props=>
      <View style={styles.container}>
        <Image style={styles.imagemOrgao} source={require('./images/rins.png')}/>
      </View>
    }
    </Stack.Screen>
    </Stack.Navigator>
    
  );
}

//função que retorna stack referente a opções
function Cadastrar(){
  
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Options"
        options={
          {headerTitle: props => <LogoTitle/>}}>
          {props => 
              <ScrollView>
              <View style={styles.container}>
          <Text style={styles.intro}>Cadastrar dúvida</Text>
                <TelaCadastro/>
               </View>  
            </ScrollView>
          }
      </Stack.Screen>
    </Stack.Navigator>
  );
}

//função que retorna stack referente a sobre
function AboutScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        options={
          {headerTitle: props => <LogoTitle/>}}>
          {props => 
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Versão do aplicativo: 1.0{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                <Text>Email do Desenvolvedor:</Text>
                <Text>HTBDev@gmail.com{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                <Text>Gostando do aplicativo?</Text>
                <Text>Avalie-nos na loja de apps{"\n"}{"\n"}</Text>
                <Button color="#4169E1" title='Avaliar'/>
               </View>  
          }
      </Stack.Screen>
    </Stack.Navigator>
  );
}




//renderiza os botões inferiores
function AppBottonTab({routeName}){
  return(
        <Tab.Navigator
      initialRouteName={routeName}
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'ios-home';
        } 
        else if (route.name === 'Noticias') {
          iconName = 'ios-paper' ;
        }
        else if (route.name === 'Orgãos') {
          iconName =  'ios-heart' ;
        }
        else if (route.name === 'Cadastrar') {
          iconName = focused ? 'ios-add-circle-outline' : 'ios-add-circle';
        }
        else if (route.name === 'About') {
          iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
        }

        // Qualquer componente pode ser usado
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: '#6495ED',
    }}
  >

      <Tab.Screen name="Home" component={TelaInicial}/>
      <Tab.Screen name="Noticias" component={TelaDeNoticias}/>
      <Tab.Screen name="Orgãos" component={TelaDeOrgaos}/>
      <Tab.Screen name="Cadastrar" component={Cadastrar}/>
      <Tab.Screen name="About" component={AboutScreen}/>

    </Tab.Navigator>

  );
}

class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='App'>
            {props => <AppBottonTab routeName='App' />}
          </Drawer.Screen>
          <Drawer.Screen name='Noticias'>
            {props => <AppBottonTab routeName='Noticias' />}
          </Drawer.Screen>
          <Drawer.Screen name='Orgãos'>
            {props => <AppBottonTab routeName='Orgãos' />}
          </Drawer.Screen>
          <Drawer.Screen name='Options'>
            {props => <AppBottonTab routeName='Options' />}
          </Drawer.Screen>
          <Drawer.Screen name='About'>
            {props => <AppBottonTab routeName='About' />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
  );
  }
} export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

    intro: {
    color: '#6495ED',
    fontStyle: 'italic',
    fontFamily: 'sans-serif-thin',
    textShadowColor: '#008B8B',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
  },

  instructions: {
    color: '#1a1a1a',
    justifyContent: 'center',
    fontSize: 18,
    marginHorizontal: 18,
    marginBottom: 20,
    alignItems: 'center'
  },

  botaoEntrar:{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:20
  },
  orgao: {
    fontSize: 18,
    marginHorizontal: 18,
    marginBottom: '10%',
    alignItems: 'center'
  },

  imagemOrgao:{ flex:1,
  height: null,
  resizeMode: 'contain',
  width: null,
}
});