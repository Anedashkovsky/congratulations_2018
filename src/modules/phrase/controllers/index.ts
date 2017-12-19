import * as Express from 'express';
const router = Express.Router();

import {PhraseController} from './PhraseController';
const phraseController = new PhraseController();

router.get('/phrase/random', phraseController.actionGetPhrase);
router.post('/phrase', phraseController.actionCreate);

export {router};
