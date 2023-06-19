import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { LIVRES } from '../models/data.js';

const Romance = ({navigation}) => {

  const newLivresRomance = []
  LIVRES.forEach(livre => {
      if(livre.categorieId.includes('c4')){
          newLivresRomance.push(livre)
      }
  })

  return (
    <View style={styles.container}>
      {newLivresRomance.map((livre, i) => (
        <View key={i}>
          <Image
            source={{ uri: livre.imageUrl }}
            style={{ width: 350, height: 200, resizeMode: 'contain' }}
          />
          <Text style={styles.text}>{livre.titre}</Text>
        </View>
      ))}
      <Button
        title="Go back to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#233876'
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 5,
  },
});

export default Romance;