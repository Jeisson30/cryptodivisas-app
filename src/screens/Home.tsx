import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getAllCryptos} from '../services/cryptoService';
import {CryptoCurrency} from '../types';
import CryptoFilter from '../components/CryptoFilter';

const Home = () => {
  const [cryptos, setCryptos] = useState<CryptoCurrency[]>([]);
  const [filteredCryptos, setFilteredCryptos] = useState<CryptoCurrency[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const data = await getAllCryptos();
        setCryptos(data.data);
        setFilteredCryptos(data.data);
      } catch (err) {
        setError('Error al obtener los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  const filterChange = (query: string) => {
    if (!query) {
      setFilteredCryptos(cryptos);
    } else {
      const filtered = cryptos.filter(crypto =>
        crypto.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredCryptos(filtered);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF9800" />
        <Text style={styles.loadingText}>Loading Cryptos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CryptoFilter onFilterChange={filterChange} />
      {/* incluimos operador ternario para validar si la crypto existe al momento de filtrar */}
      {filteredCryptos.length === 0 ? (
        <Text style={styles.noResults}>No found crypto</Text>
      ) : (
        <FlatList
          data={filteredCryptos}
          keyExtractor={(item: CryptoCurrency) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({item}: {item: CryptoCurrency}) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('Detail', {cryptoId: item.id})
              }>
              <Text style={styles.name}>
                {item.name} ({item.symbol})
              </Text>
              <Text style={styles.price}>
                ${parseFloat(item.price_usd).toFixed(2)}
              </Text>
              <Text style={styles.rank}>Rank: {item.rank}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#F5F5F5',
    paddingTop: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: '#FFF',
    margin: 8,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    alignItems: 'center',
  },
  rank: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#777',
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: '#FF9800',
    fontWeight: '600',
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 8,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  noResults: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Home;
