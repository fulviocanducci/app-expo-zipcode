import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Keyboard,
  ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import { Loader, ViewItem } from '../../components';
import { apiAsync } from '../../utils';

export default function Search() {
  const [loading, setLoading] = useState(false);
  const [zip, setZip] = useState('01001000');
  const [values, setValues] = useState({});
  async function handleButtonSearch() {
    Keyboard.dismiss();
    setLoading(true);
    setValues({});
    try {
      const result = await apiAsync(zip);
      setValues(result);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Loader loading={loading} />
      <View style={styles.container}>
        <TextInput
          keyboardType="numeric"
          style={styles.text}
          autoFocus={true}
          autoCapitalize={'none'}
          autoCorrect={false}
          maxLength={8}
          placeholder={'Digite o código postal'}
          value={zip}
          onChangeText={setZip}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={handleButtonSearch}
        >
          <MaterialIcons name="youtube-searched-for" size={20} color={'#000'} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ViewItem
          label="Código Postal"
          value={values && values.cep}
          line={true}
        />
        <ViewItem
          label="Cidade"
          value={values && values.localidade}
          line={true}
        />
        <ViewItem label="UF" value={values && values.uf} line={true} />
        <ViewItem
          label="Endereço"
          value={values && values.logradouro}
          line={true}
        />
        <ViewItem label="Bairro" value={values && values.bairro} line={true} />
        <ViewItem
          label="Complemento"
          value={values && values.complemento}
          line={true}
        />
        <ViewItem
          label="Unidade"
          value={values && values.unidade}
          line={true}
        />
        <ViewItem label="Ibge" value={values && values.ibge} line={true} />
        <ViewItem label="Gia" value={values && values.gia} line={false} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 60,
    top: 25,
    left: 15,
    right: 15
  },
  results: {
    top: 87,
    left: 15,
    right: 15
    //flex: 1,
    //position: 'absolute'
  },
  container: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    zIndex: 5,
    display: 'flex',
    flexDirection: 'row'
  },
  text: {
    flex: 1,
    height: 50,
    backgroundColor: '#efefef',
    color: '#333',
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 16,
    borderColor: '#c3c3c3',
    display: 'flex',
    flexDirection: 'row',
    elevation: 2,
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2
  },
  button: {
    width: 50,
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#c3c3c3',
    display: 'flex',
    marginLeft: 15
  }
});
