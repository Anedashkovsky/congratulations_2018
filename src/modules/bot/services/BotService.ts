/**
 * @fileoverview Bot service for create some callbacks for bot
 */
import {Utils} from '../../common/services/Utils';

class BotService {
    public static getGreetMessage(): string {
        const todayDate = new Date();
        const newYearDate = new Date(2018, 0, 1);
        const daysToNewYear = Utils.countDaysBetween(todayDate, newYearDate);

        return BotService.getGreeterString(daysToNewYear);
    }

    private static getGreeterString(daysToNewYear: number): string {
        return `Hello!\n` +
            `Before the new year is left ${daysToNewYear} days!\n` +
            `You can get here new year congratulations.\n` +
            `Or you can write your own here: http://path.to.landing/`;
    }
}

export {BotService};
