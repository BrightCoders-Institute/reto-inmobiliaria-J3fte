import React from 'react';
import { FlatList, SafeAreaView} from 'react-native';
import propiedaes from '../sources/data/propiedaes.json';
import Card from './card';

interface Propiedad {
  Nombre: string;
  Dirección: string;
  'Número de habitaciones': number;
  'Número de baños': number;
  Superficie: number;
  'Costo de renta mensual': number;
  'Evaluación o calificación de la propiedad': number;
}
const Lista = () => {
  const renderItem = ({ item }: { item: Propiedad }) => <Card propiedad={item} />;
  return (
    <SafeAreaView>
      <FlatList
       data={propiedaes.propiedades}
       renderItem={renderItem}
       keyExtractor={(item) => item.Nombre}
      />
    </SafeAreaView>
  );
};

export default Lista;
