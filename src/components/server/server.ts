/**
 * @fileoverview Server initialization
 */
import * as Express from 'express';
const expressApp = Express();

import {router as keepaliveRouter, HeartBeatService} from '../../modules/keepalive';
expressApp.use('/', keepaliveRouter);

// catch 404 and forward to error handler
expressApp.use(function(req, res) {
    console.log(`Route not found: ${req.url}`);
    res.status(404);
    res.send('Route not found');
});

const startHeartBeat = HeartBeatService.useHeartBeatFunction;

export {expressApp, startHeartBeat};
