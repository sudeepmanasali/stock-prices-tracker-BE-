// enums
export const enum REQUEST_SUCCESS_MESSAGE {
    DATABASE_CONNECTED_SUCCESSFULLY = "Moongoose connected successfully...",
    APP_STARTED = `Express server is up and running`,
    SOCKET_CONNECTED = 'Socket connected successfully...',
    STOCK_DATASAVED_SUCCESSFULLY = 'Stock data saved successfully..'
}

export const enum REQUEST_FAILURE_MESSAGES {
    APP_CRASHED = "App crashed",
    ERROR_IN_CONNECTING_DB = "Unable to connect the monog-db database",
    ERROR_IN_SAVING_STOCK_DATA = "Failed to save the stock data"
}

export const enum API_REQUEST_ROUTES {
    GET_STOCK_DATA = '/api/stocks',
}

export const enum CRYPTO_CURRENCY_NAME {
    GOOG = 'GOOG',
    BTC = 'BTC'
}

export const enum SOCKET_EVENTS {
    CONNECTION = "connection"
}

export const enum SOCKET_CHANNEL_NAMES {
    STOCK_DATA = "stockdata"
}

// constants
export const corsConfig = {
    origin: '*',
    allowedHeaders: [
        "Authorization",
        "X-Requested-With",
        "Content-Type",
        "x-auth-token"
    ]
};