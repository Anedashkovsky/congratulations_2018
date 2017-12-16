/**
 * @fileoverview Bot controller
 */
import {BotService} from '../services/BotService';

class BotController {
    public getGreeterMessage(context: any) {
        const  message = BotService.getGreetMessage();
        return context.reply(message);
    }
}

export {BotController};
