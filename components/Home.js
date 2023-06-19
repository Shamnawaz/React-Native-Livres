import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Tous"
        onPress={() => navigation.navigate('Tous')}
        style={styles.box}
      />
      <Button
        title="Historique"
        onPress={() => navigation.navigate('Historique')}
      />
      <Button
        title="Policier"
        onPress={() => navigation.navigate('Policier')}
      />
      <Button
        title="SF"
        onPress={() => navigation.navigate('SF')}
      />

      <Button
        title="Romance"
        onPress={() => navigation.navigate('Romance')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#233876',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap:20
  },
  text: {
    color: '#000',
  },
  button: {
    textAlign:  'left',
  }
});


export default HomeScreen;