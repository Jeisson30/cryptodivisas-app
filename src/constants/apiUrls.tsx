//manejamos peticiones a entorno producción

const BASE_URL = 'https://api.coinlore.net/api';

const API_PATHS = {
  GLOBAL: '/global',
  TICKERS: '/tickers',
  TICKER: '/ticker',
  MARKETS: '/coin/markets',
};

export const API_URLS = {
  GLOBAL: `${BASE_URL}${API_PATHS.GLOBAL}`,
  TICKERS: `${BASE_URL}${API_PATHS.TICKERS}`,
  TICKER: `${BASE_URL}${API_PATHS.TICKER}`,
  MARKETS: `${BASE_URL}${API_PATHS.MARKETS}`,
};
