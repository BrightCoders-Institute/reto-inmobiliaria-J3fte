import React from 'react';
import { FlatList, SafeAreaView} from 'react-native';
import card from './card';
const Lista = () => {
  return (
    <SafeAreaView>
      <FlatList
       data={'133111'}
       renderItem={card}
      />
    </SafeAreaView>
  );
};

export default Lista;
