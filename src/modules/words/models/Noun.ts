/**
 * @fileoverview Noun collection
 */
import {Document, Schema} from 'mongoose';
import {db} from '../../../components/db/mongoDb';
import {Gender} from '../constants/Gender';
const SchemaCreator = db.Schema;
const model = db.model;

interface NounAttributes {
    text: string;
    gender: Gender;
}

interface NounModel extends Document, NounAttributes {}

const NounSchema: Schema = new SchemaCreator({
    text: String,
    gender: String
});

const Noun = model<NounModel>('Noun', NounSchema);
export {Noun, NounAttributes};
