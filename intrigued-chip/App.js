import * as React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import brasil from './assets/BRASIL.png'
import servia from  './assets/servia.png'
import suica from './assets/suica.png'
import camaroes from './assets/camaroes.png'
import convocacao from './assets/convocacao.png'

function MatchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         <Text>BRASIL</Text>
          <Image style={{width: 150, height: 90}} source={brasil}/>
      </View>
      <Text>X</Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>BRASIL</Text>
        <Image style={{width: 150, height: 90}} source={servia}/>
      </View>
      </View>
      <Text style={{fontSize: 20, fontStyle: 'bold'}}>24/11</Text>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         <Text>BRASIL</Text>
          <Image style={{width: 150, height: 90}} source={brasil}/>
      </View>
      <Text>X</Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>BRASIL</Text>
        <Image style={{width: 150, height: 90}} source={suica}/>
      </View>
      </View>
      <Text style={{fontSize: 20, fontStyle: 'bold'}}>28/11</Text>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         <Text>BRASIL</Text>
          <Image style={{width: 150, height: 90}} source={brasil}/>
      </View>
      <Text>X</Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>BRASIL</Text>
        <Image style={{width: 150, height: 90}} source={camaroes}/>
      </View>
      </View>
      <Text style={{fontSize: 20, fontStyle: 'bold'}}>02/12</Text>
      
        
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{textAlign: 'center', padding: 15}}>Sede de duas Copas do Mundo (1950 e 2014), o Brasil é a única seleção a participar de todas as edições do evento e a maior vencedora da competição, com cinco títulos, todos fora de casa. Na edição atual, o Brasil busca o seu sonhado hexa.</Text>
      <Button
        title="Fase de grupos"
        onPress={() => navigation.navigate('Partidas')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontStyle: 'bold', fontSize: 20}}>Elenco do Brasil para a copa</Text>
      <Image style={{height: 460, width: 325}} source={convocacao}/>
      <Button
        title="Fase de grupos"
        onPress={() => navigation.navigate('Partidas')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Brasil" component={HomeScreen} />
      <HomeStack.Screen name="Elenco" component={MatchScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Elenco" component={SettingsScreen} />
      <SettingsStack.Screen name="Partidas" component={MatchScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Brasil" component={HomeStackScreen} />
        <Tab.Screen name="Elenco" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

