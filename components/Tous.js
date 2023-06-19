import React from 'react';
import { View, Button, Image, Text, StyleSheet, FlatList} from 'react-native';
import { LIVRES, CATEGORIES } from '../models/data.js';

const TousScreen = ({ navigation }) => {


    const renderItem = ({ item }) => (
        <View style={styles.livreContainer}>
          <Image source={{ uri: item.imageUrl }} style={{width: 350, height: 200, resizeMode: 'contain'}} />
          <Text style={styles.text}>{item.titre}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
        <FlatList
            data={LIVRES}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
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
      paddingBottom: 15,
    },
  });

export default TousScreen;