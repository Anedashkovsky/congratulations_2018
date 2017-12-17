/**
 * @fileoverview Phrase service
 */
import {PhraseAttributes, Phrase} from '../models/Phrase';

class PhraseService {
    public static async create(data: PhraseAttributes): Promise<PhraseAttributes> {
        return Phrase.create(data);
    }
}

export {PhraseService};
