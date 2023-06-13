import React from 'react';
import { Text,StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function card() {
  return (
    <View style={[styles.item]}>
      <Image
        style={styles.imagen}
        source={require('../sources/images/inmobiliaria1.png')}
      />
      <Text style={[styles.title]}>{'Go go go'}</Text>
      <Text style={styles.address}> <Icon name="map-marker-outline" size={15}/>{' Avenida mexico'}</Text>
      <View style={styles.information}>
        <Icon style={styles.icons} name="bed-king-outline" size={15}>
          <Text>dsds</Text>
        </Icon>
        <Icon style={styles.icons}  name="shower" size={15}/>
        <Icon style={styles.icons} name="texture-box" size={15}/>
      </View>
      <View style={styles.heartContainer}>
        <Icon style={styles.heart} size={20} name={'heart'} />
      </View>
  </View>
  );
}
const styles = StyleSheet.create({
  imagen:{
    borderRadius:10,
    width: 100,
    height: 100,
  },
  item: {
    borderRadius:10,
    backgroundColor:'#E9F2F8',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 28,
    position: 'absolute',
    top:12,
    left:140,
  },
  address:{
    position:'absolute',
    left:140,
    top:50,

  },
  information:{
    position:'absolute',
    top:70,
    left:140,
    flexDirection: 'row',
  },
  icons:{
    position:'relative',
    paddingRight:50,
  },

  heart:{
    color:'white',
  },
  heartContainer: {
    position:'relative',
    top:-15,
    left:300,
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default card;
