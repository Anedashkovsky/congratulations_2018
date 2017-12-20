import * as Express from 'express';
const router = Express.Router();

import {PhraseController} from './PhraseController';
const phraseController = new PhraseController();

router.get('/phrase/generated', phraseController.actionGetGeneratedPhrase);
router.post('/phrase', phraseController.actionCreate);

export {router};
