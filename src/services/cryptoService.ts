import {API_URLS} from '../constants/apiUrls';
import {CryptoCurrency, GlobalData, Market} from '../types';

// Función auxiliar para respuestas con fetch
const getFetch = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json() as Promise<T>;
};

// Obtener datos globales del mercado
export const getGlobalData = async (): Promise<GlobalData[]> => {
  try {
    const response = await fetch(API_URLS.GLOBAL);
    return getFetch<GlobalData[]>(response);
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

// Obtener datos de todas las cryptomonedas
export const getAllCryptos = async (
  start: number = 0,
  limit: number = 100,
): Promise<{data: CryptoCurrency[]}> => {
  try {
    const url = `${API_URLS.TICKERS}?start=${start}&limit=${limit}`;
    const response = await fetch(url);
    return getFetch<{data: CryptoCurrency[]}>(response);
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

// Obtener datos de una cryptomoneda específica por ID
export const getCryptoById = async (id: string): Promise<CryptoCurrency[]> => {
  try {
    const url = `${API_URLS.TICKER}?id=${id}`;
    const response = await fetch(url);
    return getFetch<CryptoCurrency[]>(response);
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

// Obtener mercados para una cryptomoneda específica
export const getCryptoMarkets = async (id: string): Promise<Market[]> => {
  try {
    const url = `${API_URLS.MARKETS}?id=${id}`;
    const response = await fetch(url);
    return getFetch<Market[]>(response);
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};
