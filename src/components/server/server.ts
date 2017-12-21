/**
 * @fileoverview Server initialization
 */
import * as path from 'path';
import * as Express from 'express';
const expressApp = Express();

import * as bodyParser from 'body-parser';
expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(bodyParser.json());

expressApp.use(Express.static('/', path.join(__dirname, '../../public')));

import {router as keepaliveRouter, HeartBeatService} from '../../modules/keepalive';
expressApp.use('/', keepaliveRouter);

import {router as phraseRouter} from '../../modules/phrase';
expressApp.use('/', phraseRouter);

// catch 404 and forward to error handler
expressApp.use(function(req, res) {
    console.log(`Route not found: ${req.url}`);
    res.status(404);
    res.send('Route not found');
});

const startHeartBeat = HeartBeatService.useHeartBeatFunction;

export {expressApp, startHeartBeat};
