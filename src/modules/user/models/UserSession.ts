/**
 * @fileoverview User session model
 */
import {Document, Schema} from 'mongoose';
import {db} from '../../../components/db/mongoDb';
const SchemaCreator = db.Schema;
const model = db.model;

interface UserSession {
    sessionId: string;
}

interface UserSessionModel extends Document, UserSession {}

const userSessionSchema: Schema = new SchemaCreator({
    sessionId: String
});

const UserSession = model<UserSessionModel>('UserSession', userSessionSchema);

export {UserSession};
