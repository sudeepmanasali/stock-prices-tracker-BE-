import { getStockPrices } from './getCryptoPrices';
import { REQUEST_SUCCESS_MESSAGE, REQUEST_FAILURE_MESSAGES, SOCKET_CHANNEL_NAMES } from './constants';
import { getIo } from './Socket';
const StockDoc = require('../modals/Stock');

// Method will make a call to get the stock prices
// Save the stock prices and emit the data to display it in front end
export const GetStocksData = async () => {
  let stocks = await getStockPrices() || [];
  let recentStocksData = stocks.map((stock: any) => {
    let data = {}
    if (stock && stock.values && stock.values.length > 0) {
      data = {
        symbol: stock?.meta.symbol,
        currency: stock?.meta.currency,
        stockData: stock?.values
      }
    }
    return data;
  });
  // getIo().emit(SOCKET_CHANNEL_NAMES.STOCK_DATA, { stocks: [{ "_id": { "$oid": `${Date.now().toLocaleString()}` }, "symbol": "GOOG", "currency": "USD", "timeStamp": { "$date": { "$numberLong": "1720873639294" } }, "stockData": [{ "datetime": `${Date.now().toLocaleString()}`, "open": "186.53000", "close": "186.78000", "low": "186.42999", "high": "186.84000", "volume": "502995", "_id": { "$oid": "6692734ed1e7ca1f1dd48e50" } }, { "datetime": "2024-07-12 15:58:00", "open": "186.56000", "close": "186.52000", "low": "186.48000", "high": "186.61000", "volume": "144452", "_id": { "$oid": "6692734ed1e7ca1f1dd48e51" } }, { "datetime": "2024-07-12 15:57:00", "open": "186.58000", "close": "186.58000", "low": "186.46001", "high": "186.63000", "volume": "77393", "_id": { "$oid": "6692734ed1e7ca1f1dd48e52" } }, { "datetime": "2024-07-12 15:56:00", "open": "186.77000", "close": "186.60001", "low": "186.56000", "high": "186.78000", "volume": "54585", "_id": { "$oid": "6692734ed1e7ca1f1dd48e53" } }, { "datetime": "2024-07-12 15:55:00", "open": "186.84500", "close": "186.75999", "low": "186.70000", "high": "186.91000", "volume": "116643", "_id": { "$oid": "6692734ed1e7ca1f1dd48e54" } }, { "datetime": "2024-07-12 15:54:00", "open": "186.39999", "close": "186.84000", "low": "186.34000", "high": "186.85001", "volume": "143183", "_id": { "$oid": "6692734ed1e7ca1f1dd48e55" } }, { "datetime": "2024-07-12 15:53:00", "open": "186.20000", "close": "186.42000", "low": "186.14000", "high": "186.44000", "volume": "53239", "_id": { "$oid": "6692734ed1e7ca1f1dd48e56" } }, { "datetime": "2024-07-12 15:52:00", "open": "186.37000", "close": "186.17500", "low": "186.16000", "high": "186.37000", "volume": "58661", "_id": { "$oid": "6692734ed1e7ca1f1dd48e57" } }, { "datetime": "2024-07-12 15:51:00", "open": "186.22000", "close": "186.38000", "low": "186.19000", "high": "186.48000", "volume": "101712", "_id": { "$oid": "6692734ed1e7ca1f1dd48e58" } }, { "datetime": "2024-07-12 15:50:00", "open": "186.48500", "close": "186.23000", "low": "186.16000", "high": "186.50000", "volume": "117291", "_id": { "$oid": "6692734ed1e7ca1f1dd48e59" } }, { "datetime": "2024-07-12 15:49:00", "open": "186.46001", "close": "186.45000", "low": "186.38000", "high": "186.50000", "volume": "39220", "_id": { "$oid": "6692734ed1e7ca1f1dd48e5a" } }, { "datetime": "2024-07-12 15:48:00", "open": "186.48170", "close": "186.47000", "low": "186.44000", "high": "186.57001", "volume": "39359", "_id": { "$oid": "6692734ed1e7ca1f1dd48e5b" } }, { "datetime": "2024-07-12 15:47:00", "open": "186.69501", "close": "186.50000", "low": "186.48000", "high": "186.69501", "volume": "41406", "_id": { "$oid": "6692734ed1e7ca1f1dd48e5c" } }, { "datetime": "2024-07-12 15:46:00", "open": "186.71271", "close": "186.70000", "low": "186.55000", "high": "186.71271", "volume": "57661", "_id": { "$oid": "6692734ed1e7ca1f1dd48e5d" } }, { "datetime": "2024-07-12 15:45:00", "open": "186.47501", "close": "186.72000", "low": "186.47501", "high": "186.81000", "volume": "65108", "_id": { "$oid": "6692734ed1e7ca1f1dd48e5e" } }, { "datetime": "2024-07-12 15:44:00", "open": "186.44000", "close": "186.47501", "low": "186.38000", "high": "186.52000", "volume": "55916", "_id": { "$oid": "6692734ed1e7ca1f1dd48e5f" } }, { "datetime": "2024-07-12 15:43:00", "open": "186.75999", "close": "186.44000", "low": "186.41499", "high": "186.75999", "volume": "80240", "_id": { "$oid": "6692734ed1e7ca1f1dd48e60" } }, { "datetime": "2024-07-12 15:42:00", "open": "186.91000", "close": "186.77000", "low": "186.73000", "high": "186.92999", "volume": "63140", "_id": { "$oid": "6692734ed1e7ca1f1dd48e61" } }, { "datetime": "2024-07-12 15:41:00", "open": "186.96001", "close": "186.91000", "low": "186.84000", "high": "186.96001", "volume": "25541", "_id": { "$oid": "6692734ed1e7ca1f1dd48e62" } }, { "datetime": "2024-07-12 15:40:00", "open": "187.13499", "close": "186.96001", "low": "186.95000", "high": "187.19000", "volume": "59148", "_id": { "$oid": "6692734ed1e7ca1f1dd48e63" } }, { "datetime": "2024-07-12 15:39:00", "open": "187.30000", "close": "187.14000", "low": "187.13000", "high": "187.31000", "volume": "25977", "_id": { "$oid": "6692734ed1e7ca1f1dd48e64" } }, { "datetime": "2024-07-12 15:38:00", "open": "187.19000", "close": "187.30000", "low": "187.12000", "high": "187.30000", "volume": "26459", "_id": { "$oid": "6692734ed1e7ca1f1dd48e65" } }, { "datetime": "2024-07-12 15:37:00", "open": "187.53500", "close": "187.17000", "low": "187.16000", "high": "187.53500", "volume": "32612", "_id": { "$oid": "6692734ed1e7ca1f1dd48e66" } }, { "datetime": "2024-07-12 15:36:00", "open": "187.50900", "close": "187.56000", "low": "187.46001", "high": "187.56979", "volume": "30408", "_id": { "$oid": "6692734ed1e7ca1f1dd48e67" } }, { "datetime": "2024-07-12 15:35:00", "open": "187.56500", "close": "187.50000", "low": "187.48000", "high": "187.62000", "volume": "30415", "_id": { "$oid": "6692734ed1e7ca1f1dd48e68" } }, { "datetime": "2024-07-12 15:34:00", "open": "187.41000", "close": "187.58000", "low": "187.41000", "high": "187.59000", "volume": "30953", "_id": { "$oid": "6692734ed1e7ca1f1dd48e69" } }, { "datetime": "2024-07-12 15:33:00", "open": "187.30499", "close": "187.41000", "low": "187.28200", "high": "187.41000", "volume": "24937", "_id": { "$oid": "6692734ed1e7ca1f1dd48e6a" } }, { "datetime": "2024-07-12 15:32:00", "open": "187.28999", "close": "187.28999", "low": "187.27000", "high": "187.37000", "volume": "26172", "_id": { "$oid": "6692734ed1e7ca1f1dd48e6b" } }, { "datetime": "2024-07-12 15:31:00", "open": "187.48000", "close": "187.28000", "low": "187.08000", "high": "187.48000", "volume": "53580", "_id": { "$oid": "6692734ed1e7ca1f1dd48e6c" } }, { "datetime": "2024-07-12 15:30:00", "open": "187.61000", "close": "187.47501", "low": "187.47000", "high": "187.67000", "volume": "32582", "_id": { "$oid": "6692734ed1e7ca1f1dd48e6d" } }], "__v": { "$numberInt": "0" } }] });
  if (recentStocksData[0]) {
    StockDoc.insertMany(recentStocksData).then((stockData: any) => {
      console.info(REQUEST_SUCCESS_MESSAGE.STOCK_DATASAVED_SUCCESSFULLY, stockData);
      getIo().emit(SOCKET_CHANNEL_NAMES.STOCK_DATA, { stocks: recentStocksData });
    }).catch((error: any) => {
      console.log(error);
    });
  }
}