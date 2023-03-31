import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
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
      <>
        <Image
          accessibilityIgnoresInvertColors
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.title}>{title}</Text>
      </>
    </TouchableHighlight>
  );
};

function HomeScreen() {
  const [count, setCount] = useState(1);

  // This is intentional to increase one render count
  // and see the results in the Reassure report
  useEffect(() => {
    setTimeout(() => {
      setCount(prevState => prevState + 1);
    }, 0);
  }, []);

  if (count >= 1) {
    return (
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    );
  }

  return null;
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 20,
    marginVertical: 8,
    backgroundColor: theme.colors.gray,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
