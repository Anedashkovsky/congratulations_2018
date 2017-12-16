/**
 * @fileoverview Noun collection
 */
import {Document, Schema} from 'mongoose';
import {db} from '../../../components/db/mongoDb';
import {Gender} from '../constants/Gender';
const SchemaCreator = db.Schema;
const model = db.model;

interface AdjectiveAttributes {
    text: string;
    gender: Gender;
}

interface AdjectiveModel extends Document, AdjectiveAttributes {}

const AdjectiveSchema: Schema = new SchemaCreator({
    text: String,
    gender: String
});

const Adjective = model<AdjectiveModel>('Noun', AdjectiveSchema);
export {Adjective, AdjectiveAttributes};
