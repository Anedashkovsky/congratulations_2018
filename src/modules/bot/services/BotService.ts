/**
 * @fileoverview Bot service for create some callbacks for bot
 */
import {Utils} from '../../common/services/Utils';

const APP_NAME = process.env.APP_NAME;

class BotService {
    public static getGreetMessage(): string {
        const todayDate = new Date();
        const newYearDate = new Date(2018, 0, 1);
        const daysToNewYear = Utils.countDaysBetween(todayDate, newYearDate);

        return BotService.getGreeterString(daysToNewYear);
    }

    private static getGreeterString(daysToNewYear: number): string {
        return `Привет!\n` +
            `До нового года осталось ${daysToNewYear} дней!\n` +
            `Если тебе самому есть, чего пожелать коллегам, `+
            ` переходи на лендинг https://${APP_NAME}.herokuapp.com и оставляй своё пожелание.\n` +
            `Будь уверен, что кто-нибудь его обязательно получит.`;
    }
}

export {BotService};
