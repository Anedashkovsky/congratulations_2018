/**
 * @fileoverview Phrase model
 */
import {Document, Schema} from 'mongoose';
import {db} from '../../../components/db/mongoDb';
import {Type} from '../constants/PhraseType';

interface PhraseAttributes {
    text: string;
    author?: string;
    type: Type;
}

interface PhraseModel extends Document, PhraseAttributes {}

const PhraseSchema: Schema = new db.Schema({
    text: String,
    author: String,
    type: String
});

const Phrase = db.model<PhraseModel>('Phrase', PhraseSchema);
export {Phrase, PhraseAttributes};
