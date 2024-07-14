import express from 'express';
import { API_REQUEST_ROUTES } from '../common/constants';
import { getStockData } from '../controllers/StockController';

const router = express.Router();

// to get all the stack data
router.get(API_REQUEST_ROUTES.GET_STOCK_DATA, getStockData);

export default router;