import mongoose, { Schema } from "mongoose";

const OHLC_SCHEMA = new mongoose.Schema({
  datetime: {
    type: String,
    required: true
  },
  open: {
    type: String,
    required: true
  },
  close: {
    type: String,
    required: true
  },
  low: {
    type: String,
    required: true
  },
  high: {
    type: String,
    required: true
  },
  volume: {
    type: String,
    required: true
  }
});

const STOCK_SCHEMA = new mongoose.Schema({
  symbol: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  timeStamp: {
    type: Date,
    default: Date.now()
  },
  stockData: [OHLC_SCHEMA]
});

module.exports = mongoose.model("Stock", STOCK_SCHEMA);