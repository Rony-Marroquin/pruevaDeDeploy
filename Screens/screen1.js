// screens/Screen1.js
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title='Ver Productos'
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
}

// El resto del código permanece igual


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
