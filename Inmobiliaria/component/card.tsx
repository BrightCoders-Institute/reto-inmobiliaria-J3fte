import React from 'react';
import { Text,StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Propiedad {
  Nombre: string;
  Dirección: string;
  'Número de habitaciones': number;
  'Número de baños': number;
  Superficie: number;
  'Costo de renta mensual': number;
  'Evaluación o calificación de la propiedad': number;
}
interface CardProps {
  propiedad: Propiedad;
}

const Card: React.FC<CardProps> = ({ propiedad }) => {
  return (
    <View style={[styles.item]}>
      <Image
        style={styles.imagen}
        source={require('../sources/images/inmobiliaria1.png')}
      />
      <Text style={[styles.title]} >{propiedad.Nombre}</Text>
      <Text style={styles.address}>
        <Icon name="map-marker-outline" size={25} /> {propiedad.Dirección}
      </Text>
      <View style={styles.information}>
        <Icon style={styles.icons} name="bed-king-outline" size={25} />
        <Text style={styles.text}>{propiedad['Número de habitaciones']}</Text>
        <Icon style={styles.icons} name="shower" size={25} />
        <Text style={styles.text}>{propiedad['Número de baños']}</Text>
        <Icon style={styles.icons} name="texture-box" size={25} />
        <Text style={styles.text}>{propiedad.Superficie} ft</Text>
      </View>
      <View style={styles.heartContainer}>
        <Icon style={styles.heart} size={20} name={'heart'} />
      </View>
      <Text style={styles.renta}>${propiedad['Costo de renta mensual']}/m</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text:{
    paddingRight:35,
    fontSize:15,
  },
  imagen:{
    position:'relative',
    top:25,
    left:10,
    borderRadius:10,
    width: 120,
    height: 120,
  },
  item: {
    borderRadius:10,
    backgroundColor:'#E9F2F8',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    position: 'absolute',
    top:12,
    left:140,
    maxWidth:500,
    overflow:'hidden',
  },
  address:{
    position:'absolute',
    left:140,
    top:50,

  },
  information:{
    position:'absolute',
    top:85,
    left:140,
    flexDirection: 'row',
  },
  icons:{
    position:'relative',
    paddingRight:10,
  },

  heart:{
    color:'white',
  },
  heartContainer: {
    position:'relative',
    left:300,
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  renta:{
    position:'relative',
    left:140,
    top:-40,
    fontSize:20,
    width:100,
    fontWeight:'bold',
    color:'black',
  },
});

export default Card;
