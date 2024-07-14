import { Request, Response } from 'express';

// const StockDB = new Sco
const StockDB = require('../modals/Stock');

// to get the stock data
export const getStockData = (req: Request, res: Response) => {
  StockDB.find({}).sort({ timeStamp: -1 }).limit(5)
    .then((stockData: any) => {
      res.status(200).send({ stocks: stockData });
    }).catch((error: any) => {
      res.status(500).json({ "message": error.message });
    });
}
