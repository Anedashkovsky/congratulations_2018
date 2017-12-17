/**
 * @fileoverview Verb collection
 */
import {Document, Schema} from 'mongoose';
import {db} from '../../../components/db/mongoDb';

interface VerbAttributes {
    text: string;
}

interface VerbModel extends Document, VerbAttributes {}

const VerbSchema: Schema = new db.Schema({
    text: String,
    gender: String
});

const Verb = db.model<VerbModel>('Verb', VerbSchema);
export {Verb, VerbAttributes};
