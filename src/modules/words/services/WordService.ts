/**
 * @fileoverview Service for create and get words
 */
import {Noun, NounAttributes} from '../models/Noun';
import {Verb, VerbAttributes} from '../models/Verb';
import {Adjective, AdjectiveAttributes} from '../models/Adjective';

class WordService {
    public static async createNoun(data: NounAttributes): Promise<NounAttributes> {
        return Noun.create(data);
    }

    public static async createVerb(data: VerbAttributes): Promise<VerbAttributes> {
        return Verb.create(data);
    }

    public static async createAdjective(data: AdjectiveAttributes): Promise<AdjectiveAttributes> {
        return Adjective.create(data);
    }
}

export {WordService};
