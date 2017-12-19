/**
 * @fileoverview Phrase service
 */
import {WordService} from '../../word';

import {PhraseAttributes, Phrase} from '../models/Phrase';

class PhraseService {
    public static async getRandomPhrase(): Promise<string> {
        const phraseWords = await WordService.getrandomWords();
        const {adjective, noun, verb} = phraseWords;
        return `${PhraseService.getPhraseBeginning()} ${verb.text} ${adjective.text} ${noun.text}`;
    }

    public static async create(data: PhraseAttributes): Promise<PhraseAttributes> {
        return Phrase.create(data);
    }

    private static getPhraseBeginning(): string {
        return 'Желаем Вам ';
    }
}

export {PhraseService};
