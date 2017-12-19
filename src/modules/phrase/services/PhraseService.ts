/**
 * @fileoverview Phrase service
 */
import {WordService} from '../../word';

import {PhraseAttributes, Phrase} from '../models/Phrase';

class PhraseService {
    public static async getRandomPhrase(): Promise<string> {
        const [
            verb,
            noun
        ] = await Promise.all([
            WordService.getRandomVerb(),
            WordService.getRandomNoun()
        ]);
        const adjective = await WordService.getRandomAdjective(noun.gender);
        return `${PhraseService.getPhraseBeginning()} ${verb} ${adjective} ${noun}`;
    }

    public static async create(data: PhraseAttributes): Promise<PhraseAttributes> {
        return Phrase.create(data);
    }

    private static getPhraseBeginning(): string {
        return 'Желаем Вам ';
    }
}

export {PhraseService};
