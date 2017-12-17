/**
 * @fileoverview Noun collection
 */
import {Document, Schema} from 'mongoose';
import {db} from '../../../components/db/mongoDb';
import {Gender} from '../constants/Gender';

interface NounAttributes {
    text: string;
    gender: Gender;
}

interface NounModel extends Document, NounAttributes {}

const NounSchema: Schema = new db.Schema({
    text: String,
    gender: String
});

const Noun = db.model<NounModel>('Noun', NounSchema);
export {Noun, NounAttributes};
