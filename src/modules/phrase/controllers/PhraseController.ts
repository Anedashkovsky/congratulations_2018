/**
 * @fileoverview Phrase controller
 */
import * as Express from 'express';

import {PhraseService} from '../services/PhraseService';

class PhraseController {
    public async actionGetPhrase(request: Express.Request, response: Express.Response): Promise<void> {
        const result = await PhraseService.getRandomPhrase();
        response.contentType('application/json');
        response.end(result);
    }

    public async actionCreate(request: Express.Request, response: Express.Response): Promise<void> {
        const {text, type} = request.query;
        await PhraseService.create({text, type});
        response.end();
    }
}

export {PhraseController};
