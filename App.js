import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Historique from './components/Historique.js'
import Policier from './components/Policier.js'
import SF from './components/SF.js'
import Romance from './components/Romance.js'
import Home from './components/Home.js'
import TousScreen from './components/Tous.js'

import { NavigationContainer } from '@react-navigation/native'
import { LIVRES, CATEGORIES } from './models/data.js'

const Stack = createNativeStackNavigator()

LIVRES.map((livre) => (
  console.log(livre.titre)
) )

export default function App() {

    return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Tous" component={TousScreen}/>
        <Stack.Screen name="Historique" component={Historique}/>
        <Stack.Screen name="Romance" component={Romance}/>
        <Stack.Screen name="Policier" component={Policier}/>
        <Stack.Screen name="SF" component={SF}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#D3D3D3',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: "#fff",
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#000',
//   },
//   button: {
//     textAlign:  'left',
//   }
// });
