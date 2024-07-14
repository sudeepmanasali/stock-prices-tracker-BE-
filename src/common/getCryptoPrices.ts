const axios = require('axios');

const API_KEY = process.env.TWELVE_DATA_API_KEY;

// api call to retreive the stock data
export const fetchCryptoOHLC = async (symbol: string, timeInterval: string) => {
  try {
    const response = await axios.get(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${timeInterval}&apikey=${API_KEY}`);
    return response.data;
  } catch (error: any) {
    console.error(`Error fetching ${symbol} OHLC data:`, error.message);
    return null;
  }
};

// method to get 5 stock prices
export const getStockPrices = async () => {
  const stockSymbols = ['AAPL', 'USD', 'MSFT', 'GOOG', 'NVDA'];
  const timeInterval = '1min';
  const stockPricePromises = stockSymbols.map(symbol => fetchCryptoOHLC(symbol, timeInterval));

  try {
    const cryptoData = await Promise.all(stockPricePromises);
    console.log(cryptoData)
    return cryptoData;
  } catch (error: any) {
    console.error('Error fetching cryptocurrency data:', error?.message);
  }
};

