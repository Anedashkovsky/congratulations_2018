/**
 * @fileoverview Verb collection
 */
import {Document, Schema} from 'mongoose';
import {db} from '../../../components/db/mongoDb';
const SchemaCreator = db.Schema;
const model = db.model;

interface VerbAttributes {
    text: string;
}

interface VerbModel extends Document, VerbAttributes {}

const VerbSchema: Schema = new SchemaCreator({
    text: String,
    gender: String
});

const Verb = model<VerbModel>('Verb', VerbSchema);
export {Verb, VerbAttributes};
