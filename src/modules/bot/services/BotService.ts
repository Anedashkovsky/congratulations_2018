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
        return `Привет! Я — Самый праздничный бот.\n` +
            `До нового года осталось ${daysToNewYear} дней,` +
            ` и я могу помочь создать тебе и твоим коллегам праздничное  настроение.\n` +
            `Для этого переходи на лендинг https://new-year-congratulations.herokuapp.com и ` +
            `оставляй свои пожелания в поле рядом.\n\n` +
            `С наступающим!`;
    }
}

export {BotService};
