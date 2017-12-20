/**
 * @fileoverview Bot controller
 */
import {PhraseService} from '../../phrase';
import {BotService} from '../services/BotService';

import {BotReplyView} from '../views/BotReplyView';

class BotController {
    public getGreeterMessage(context: any): void {
        const message = BotService.getGreetMessage();
        return context.reply(message);
    }

    public async getRandomPhrase(context: any): Promise<void> {
        context.session.congratulationsCount = context.session.congratulationsCount || 0;
        context.session.congratulationsCount++;
        const addLandingPromotion = (context.session.congratulationsCount === 4);

        const phrase = await PhraseService.getRandomPhrase();
        const message = BotReplyView.renderCongratulation(phrase, {addLandingPromotion});
        return context.reply(message);
    }
}

export {BotController};
