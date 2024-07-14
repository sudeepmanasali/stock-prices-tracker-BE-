import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import { corsConfig, REQUEST_FAILURE_MESSAGES, REQUEST_SUCCESS_MESSAGE, SOCKET_EVENTS } from './common/constants';
import stockDataRouter from './routes/StockRoutes';
import { GetStocksData } from './common/util';
require('dotenv').config();

const cron = require('node-cron');

const app = express();
app.use(cors(corsConfig));
app.use(stockDataRouter);

// retreive the data for every 60 seconds
cron.schedule('*/60 * * * * *', GetStocksData);

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@price-tracker.y1oknv4.mongodb.net/`)
  .then(() => {
    console.info(REQUEST_SUCCESS_MESSAGE.DATABASE_CONNECTED_SUCCESSFULLY);

    const PORT = process.env.PORT || 8000;
    const server = app.listen(PORT, () => {
      console.info(REQUEST_SUCCESS_MESSAGE.APP_STARTED);
    });

    const io = require('./common/Socket').init(server);
    io.on(SOCKET_EVENTS.CONNECTION, (socket: any) => {
      console.info(REQUEST_SUCCESS_MESSAGE.SOCKET_CONNECTED, socket.id);
    });
  })
  .catch((err) => {
    console.error(REQUEST_FAILURE_MESSAGES.ERROR_IN_CONNECTING_DB, err);
    console.error(REQUEST_FAILURE_MESSAGES.APP_CRASHED);
    process.exit();
  });
