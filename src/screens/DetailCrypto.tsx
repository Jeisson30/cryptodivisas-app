import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {getCryptoById, getCryptoMarkets} from '../services/cryptoService';
import {CryptoCurrency, Market} from '../types';

type RootStackParamList = {
  Detail: {cryptoId: string};
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Detail'
>;

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

const Detail = ({route}: Props) => {
  const {cryptoId} = route.params;
  const [crypto, setCrypto] = useState<CryptoCurrency | null>(null);
  const [markets, setMarkets] = useState<Market[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Por params se trae el Id de la crypto  y se pasa como parametro a los servicios definidos.
  useEffect(() => {
    const fetchCryptoDetails = async () => {
      try {
        const [cryptoData, marketsData] = await Promise.all([
          getCryptoById(cryptoId),
          getCryptoMarkets(cryptoId),
        ]);

        setCrypto(cryptoData[0]);
        setMarkets(marketsData);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoDetails();
  }, [cryptoId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF9800" />
        <Text>Loading details...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!crypto) {
    return (
      <View>
        <Text>Crypto not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>
          {crypto.name} ({crypto.symbol})
        </Text>
        <Text style={styles.price}>
          ${parseFloat(crypto.price_usd).toFixed(2)}
        </Text>
        <Text style={styles.rank}>Rank: #{crypto.rank}</Text>
        <Text style={styles.volume}>
          Volume 24h: ${crypto.volume24.toFixed(2)}
        </Text>
        <Text
          style={[
            styles.change,
            parseFloat(crypto.percent_change_24h) >= 0
              ? styles.positiveChange
              : styles.negativeChange,
          ]}>
          24h Change: {crypto.percent_change_24h}%
        </Text>
      </View>

      {/* List Market */}
      <Text style={styles.marketTitle}>Markets:</Text>
      {markets.length > 0 ? (
        <FlatList
          data={markets}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.marketRow}
          renderItem={({item}) => (
            <View style={styles.marketItem}>
              <Text style={styles.marketName}>{item.name}</Text>
              <Text style={styles.marketPair}>
                {item.base}/{item.quote} - ${item.price_usd.toFixed(2)}
              </Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noMarketsText}>No market data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF9800',
    marginBottom: 8,
  },
  rank: {
    fontSize: 18,
    color: '#777',
    marginBottom: 6,
  },
  volume: {
    fontSize: 16,
    color: '#555',
    marginBottom: 6,
  },
  change: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  positiveChange: {
    color: 'green',
  },
  negativeChange: {
    color: 'red',
  },
  marketTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  marketRow: {
    justifyContent: 'space-between',
  },
  marketItem: {
    backgroundColor: '#FFF',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  marketName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  marketPair: {
    fontSize: 14,
    color: '#555',
  },
  noMarketsText: {
    fontSize: 16,
    color: '#777',
  },
});

export default Detail;
