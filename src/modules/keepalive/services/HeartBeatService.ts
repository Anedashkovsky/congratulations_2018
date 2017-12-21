/**
 * @fileoverview Heart beat service
 */
import * as https from 'https';
const DELAY_INTERVAL = 1000 * 60 * 10; // 10 minutes

import {Utils} from '../../common/services/Utils';

class HeartBeatService {
    public static useHeartBeatFunction(): void {
        setInterval(HeartBeatService.beat, DELAY_INTERVAL);
    }

    private static async beat(): Promise<void> {
        console.log('Heartbeat');
        await https.get(`${Utils.buildAppurl()}/heartbeat`);
    }
}

export {HeartBeatService};
