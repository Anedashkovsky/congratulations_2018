/**
 * @fileoverview Bot service for create some callbacks for bot
 */
import {Utils} from '../../common/services/Utils';

class BotService {
    public static getGreetMessage(): string {
        const todayDate = new Date();
        const newYearDate = new Date(2018, 1, 1);
        const daysToNewYear = Utils.countDaysBetween(todayDate, newYearDate);

        return BotService.getGreeterString(daysToNewYear);
    }

    private static getGreeterString(daysToNewYear: number): string {
        return `\
            Hello!
            Before the new year is left ${daysToNewYear} days!
            You can get here new year congratulations.
            Or you can write your own here: http://path.to.landing/\
        `;
    }
}

export {BotService};
