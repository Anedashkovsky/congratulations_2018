/**
 * @fileoverview Heart beat service
 */
import * as http from 'http';
const APP_NAME = process.env.HEROKU_APP_NAME;
const DELAY_INTERVAL = 1000 * 60 * 10; // 10 minutes

class HeartBeatService {
    public static useHeartBeatFunction(): void {
        const timer = setInterval(HeartBeatService.beat, DELAY_INTERVAL)
        console.log(timer);
    }

    private static async beat() {
        console.log('Heartbeat');
        await http.get(`http://${APP_NAME}.herokuapp.com/heartbeat`);
    }
}

export {HeartBeatService};
