/**
 * @fileoverview Phrase service
 */
import {WordService} from '../../word';
import {Type} from '../constants/PhraseType';
import {PhraseAttributes, Phrase} from '../models/Phrase';

class PhraseService {
    public static async getRandomPhrase(): Promise<PhraseAttributes> {
        const dbPhraseCount = await PhraseService.getPhrasesCount();
        let result;
        if (dbPhraseCount) {
            const getPhraseFromDb = Boolean(Math.floor(10 * Math.random()) <= 2);
            result = getPhraseFromDb ?
                PhraseService.getDbRandomPhrase() :
                PhraseService.generateRandomPhrase();
        } else {
            result = PhraseService.generateRandomPhrase();
        }
        return result;
    }

    public static async create(data: PhraseAttributes): Promise<PhraseAttributes> {
        return Phrase.create(data);
    }

    public static async generateRandomPhrase(): Promise<PhraseAttributes> {
        const phraseWords = await WordService.getrandomWords();
        const {adjective, noun, verb} = phraseWords;
        const text = `${verb.text} ${adjective.text} ${noun.text}`;
        return {text, type: Type.GENERATED};
    }

    private static async getDbRandomPhrase(): Promise<PhraseAttributes> {
        const  phraseCount = await PhraseService.getPhrasesCount();
        const skipAmount = Math.floor(Math.random() * phraseCount);

        return Phrase.findOne({}).skip(skipAmount).exec() as Promise<PhraseAttributes>;
    }

    private static async getPhrasesCount(): Promise<number> {
        return Phrase.count({}).exec();
    }
}

export {PhraseService, PhraseAttributes};
