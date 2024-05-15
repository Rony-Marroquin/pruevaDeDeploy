// Importamos las bibliotecas y componentes necesarios
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';

// Definimos el componente Screen2
export default function Screen2({ navigation }) {
  // Usamos el hook useState para manejar el estado de los datos
  const [data, setData] = useState(null);

  // Usamos el hook useEffect para hacer la solicitud a la API cuando el componente se monta
  useEffect(() => {
    // Hacemos una solicitud GET a la API de Rick and Morty
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json()) // Convertimos la respuesta en JSON
      .then((json) => setData(json.results)) // Guardamos los resultados en el estado
      .catch((error) => console.error(error)); // Manejamos cualquier error que pueda ocurrir
  }, []);

  return (
    <ScrollView>
      {data ? ( // Si los datos están cargados...
        data.map((item, index) => ( // ...mapeamos cada personaje a un componente
          <View key={index} style={styles.container}>
            <Image source={{uri: item.image}} style={{width: 200, height: 200}} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.text}>Estado: {item.status}</Text>
            <Text style={styles.text}>Especie: {item.species}</Text>
            <Text style={styles.text}>Tipo: {item.type}</Text>
            <Text style={styles.text}>Género: {item.gender}</Text>
            <Button title="Información" onPress={() => navigation.navigate('Informacion', {url: 'https://rickandmortyapi.com/'})} />
          </View>
        ))
      ) : (
        <Text>Cargando...</Text> // Si los datos aún no están cargados, mostramos un mensaje de "Cargando..."
      )}
    </ScrollView>
  );
}

// Definimos los estilos para nuestros componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});
