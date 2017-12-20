/**
 * @fileoverview View for bot answers
 */
import {PhraseType, Phrase} from '../../phrase'

interface RenderCongratulationParams {
    addLandingPromotion?: boolean;
}

class BotReplyView {
    public static renderCongratulation(phrase: Phrase, params: RenderCongratulationParams): string {
        let result: string;
        if (phrase.type === PhraseType.USER_TYPED) {
            result = BotReplyView.getUserCongratulationText(phrase);
        } else {
            result = BotReplyView.getBotCongratulationText(phrase);
        }

        if (params.addLandingPromotion) {
            result += `\n${BotReplyView.getlandingPromotionMessage()}`
        }

        return result;
    }

    private static getUserCongratulationText(phrase: Phrase): string {
        let headerText: string;
        if (phrase.author) {
            headerText = `${phrase.author} поздравляет тебя:`
        } else {
            headerText = `Некто, пожелавший остаться анонимным, в поздравляет тебя с Новым годом:`
        }
        return `${headerText}\n${phrase.text}`;
    }

    private static getBotCongratulationText(phrase: Phrase): string {
        return `Бот желает тебе в Новом году ${phrase.text}!`
    }

    private static getlandingPromotionMessage(): string {
        return `adreslendo.sa\n` +
            `Заходи на нашу новогоднюю страничку, чтобы получить больше пожеланий! ` +
            `Там же ты можешь оставить и своё пожелание, а бот пришлёт его кому-нибудь из компании`;
    }
}

export {BotReplyView};
