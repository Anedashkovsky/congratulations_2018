/**
 * @fileoverview Noun collection
 */
import {Document, Schema} from 'mongoose';
import {db} from '../../../components/db/mongoDb';
import {Gender} from '../constants/Gender';

interface AdjectiveAttributes {
    text: string;
    gender: Gender;
}

interface AdjectiveModel extends Document, AdjectiveAttributes {}

const AdjectiveSchema: Schema = new db.Schema({
    text: String,
    gender: String
});

const Adjective = db.model<AdjectiveModel>('Adjective', AdjectiveSchema);
export {Adjective, AdjectiveAttributes};
