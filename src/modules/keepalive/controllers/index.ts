import * as Express from 'express';
const router = Express.Router();

import {KeepAliveController} from './KeepAliveController';
const keepAliveController = new KeepAliveController();

router.get('/heartbeat', keepAliveController.actionHeartBeat);

export {router};
