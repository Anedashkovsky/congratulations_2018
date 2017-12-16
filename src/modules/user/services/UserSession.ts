/**
 * @fileoverview User session model
 */
import {UserSession} from '../models/UserSession';

class USeSessionService {
    public static async CeateSession(sessionId: string): Promise<any> {
        return UserSession.create({sessionId});
    }
}
