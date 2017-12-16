/**
 * @fileoverview Mongo db initer
 */
import Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;
const MONGO_CONNECT_URI = process.env.MONGODB_URI;

console.log('Mongoose connect');

if (MONGO_CONNECT_URI) {
    Mongoose.connect(MONGO_CONNECT_URI);
} else {
    throw new Error(`Please specify connect uri by assigning env variable \"MONGODB_URI\"`);
}

export {Mongoose as db};
