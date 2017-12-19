/**
 * @fileoverview Controller for make keep alive of application
 */
import * as Express from 'express';

class KeepAliveController {
    public actionHeartBeat(request: Express.Request, response: Express.Response): void {
        response.end('alive');
    }
}

export {KeepAliveController}
