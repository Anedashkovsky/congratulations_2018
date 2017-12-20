/**
 * @fileoverview Phrase service
 */
import {WordService} from '../../word';

import {PhraseAttributes, Phrase} from '../models/Phrase';

class PhraseService {
    public static async getRandomPhrase(): Promise<string> {
        const dbPhraseCount = await PhraseService.getPhrasesCount();
        let result;
        if (dbPhraseCount) {
            const getPhraseFromDb = Boolean(Math.floor(10 * Math.random()) <= 2);
            result = getPhraseFromDb ?
                PhraseService.getDbRandomPhraseText() :
                PhraseService.generateRandomPhrase();
        } else {
            result = PhraseService.generateRandomPhrase();
        }
        return result;
    }

    public static async create(data: PhraseAttributes): Promise<PhraseAttributes> {
        return Phrase.create(data);
    }

    private static async generateRandomPhrase(): Promise<string> {
        const phraseWords = await WordService.getrandomWords();
        const {adjective, noun, verb} = phraseWords;
        return `${PhraseService.getPhraseBeginning()} ${verb.text} ${adjective.text} ${noun.text}`;
    }

    private static async getDbRandomPhraseText(): Promise<string> {
        const phrase = await PhraseService.getDbRandomPhrase();
        return `${phrase.author} желает Вам: ${phrase.text}`;
    }

    private static async getDbRandomPhrase(): Promise<PhraseAttributes> {
        const  phraseCount = await PhraseService.getPhrasesCount();
        const skipAmount = Math.floor(Math.random() * phraseCount);

        return Phrase.findOne({}).skip(skipAmount).exec() as Promise<PhraseAttributes>;
    }

    private static async getPhrasesCount(): Promise<number> {
        return Phrase.count({}).exec();
    }

    private static getPhraseBeginning(): string {
        return 'Желаем Вам';
    }
}

export {PhraseService};
