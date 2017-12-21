/**
 * @fileoverview Bot controller
 */
const Markup = require('telegraf/markup');

import {PhraseService} from '../../phrase';
import {BotService} from '../services/BotService';

import {BotReplyView} from '../views/BotReplyView';

const PHRASE_WITH_PROMOTION_NUMBER = 4;

const GENERATE_PHRASE_COMMAND = 'Рубануть!';

class BotController {
    public getGreeterMessage(context: any): void {
        const message = BotService.getGreetMessage();
        const keyboard = Markup.keyboard(['GENERATE_PHRASE_COMMAND'])
            .resize()
            .extra();
        return context.reply(message, keyboard);
    }

    public async getRandomPhrase(context: any): Promise<void> {
        context.session.congratulationsCount = context.session.congratulationsCount || 0;
        context.session.congratulationsCount++;
        const addLandingPromotion = (context.session.congratulationsCount >= PHRASE_WITH_PROMOTION_NUMBER);

        if (addLandingPromotion) {
            context.session.congratulationsCount = 0;
        }

        const phrase = await PhraseService.getRandomPhrase();
        const message = BotReplyView.renderCongratulation(phrase, {addLandingPromotion});
        return context.reply(message);
    }
}

export {BotController, GENERATE_PHRASE_COMMAND};
