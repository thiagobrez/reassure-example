import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {RootStackParamList} from '../../../App';

type ItemProps = {title: string};

const theme = {
  colors: {
    gray: '#eeeeee',
  },
};

const DATA = new Array(1000)
  .fill(0)
  .map((el, index) => ({id: `id-${index}`, title: `Item ${index}`}));

const Item = ({title}: ItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableHighlight
      underlayColor="rgba(255, 255, 255, 0.4)"
      accessibilityRole="button"
      style={styles.item}
      onPress={() => navigation.navigate('Details', {title})}>
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );
};

function HomeScreen() {
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: theme.colors.gray,
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
