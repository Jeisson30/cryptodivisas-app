import React from 'react';
import {View, Button, Alert, StyleSheet} from 'react-native';

const Home = () => {
  const showAlert = () => {
    Alert.alert(
      '¡Hola!',
      'Mensaje inicio app funcional',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Prueba OK" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
