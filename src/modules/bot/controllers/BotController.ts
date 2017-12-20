/**
 * @fileoverview Bot controller
 */
import {PhraseService} from '../../phrase';
import {BotService} from '../services/BotService';

class BotController {
    public getGreeterMessage(context: any): void {
        const  message = BotService.getGreetMessage();
        return context.reply(message);
    }

    public async getRandomPhrase(context: any): Promise<void> {
        const phrase = await PhraseService.getRandomPhrase();
        return context.reply(phrase);
    }
}

export {BotController};
