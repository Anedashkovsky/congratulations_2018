/**
 * @fileoverview Phrase controller
 */
import * as Express from 'express';
import {Type} from '../constants/PhraseType';

import {PhraseService} from '../services/PhraseService';

class PhraseController {
    public async actionGetPhrase(request: Express.Request, response: Express.Response): Promise<void> {
        const result = await PhraseService.getRandomPhrase();
        response.contentType('application/json');
        response.send({text: result});
    }

    public async actionCreate(request: Express.Request, response: Express.Response): Promise<void> {
        const {text, author} = request.query;
        await PhraseService.create({
            text,
            author,
            type: Type.USER_TYPED
        });
        response.end();
    }
}

export {PhraseController};
