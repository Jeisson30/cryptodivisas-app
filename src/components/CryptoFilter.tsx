import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface CryptoFilterProps {
  onFilterChange: (query: string) => void;
}

const CryptoFilter: React.FC<CryptoFilterProps> = ({onFilterChange}) => {
  const [search, setSearch] = useState('');

  const crytoSearch = (text: string) => {
    setSearch(text);
    onFilterChange(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search cryptocurrency..."
        value={search}
        onChangeText={crytoSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 12,
  },
  input: {
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
});

export default CryptoFilter;
