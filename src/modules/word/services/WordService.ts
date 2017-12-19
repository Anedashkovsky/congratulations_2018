/**
 * @fileoverview Service for create and get words
 */
import {Noun, NounAttributes} from '../models/Noun';
import {Verb, VerbAttributes} from '../models/Verb';
import {Adjective, AdjectiveAttributes} from '../models/Adjective';
import {Gender} from '../constants/Gender';

interface PhraseWords {
    noun: NounAttributes;
    verb: VerbAttributes;
    adjective: AdjectiveAttributes;
}

class WordService {
    public static async getrandomWords(): Promise<PhraseWords> {
        const [
            verb,
            noun
        ] = await Promise.all([
            WordService.getRandomVerb(),
            WordService.getRandomNoun()
        ]);
        const adjective = await WordService.getRandomAdjective(noun.gender);
        return {verb, noun, adjective};
    }

    public static async getRandomNoun(): Promise<NounAttributes> {
        const nounsCount = await WordService.getNounCount();
        const skipAmount = Math.floor(Math.random() * nounsCount);
        return Noun.findOne({}).skip(skipAmount).exec() as Promise<NounAttributes>;
    }

    public static async getRandomVerb(): Promise<VerbAttributes> {
        const verbsCount = await WordService.getVerbCount();
        const skipAmount = Math.floor(Math.random() * verbsCount);
        return Verb.findOne({}).skip(skipAmount).exec() as Promise<VerbAttributes>;
    }

    public static async getRandomAdjective(gender: Gender): Promise<AdjectiveAttributes> {
        const adjectivesCount = await WordService.getAdjectiveCount(gender);
        const skipAmount = Math.floor(Math.random() * adjectivesCount);
        return Adjective.findOne({gender}).skip(skipAmount).exec() as Promise<AdjectiveAttributes>;
    }

    public static async createNoun(data: NounAttributes): Promise<NounAttributes> {
        return Noun.create(data);
    }

    public static async createVerb(data: VerbAttributes): Promise<VerbAttributes> {
        return Verb.create(data);
    }

    public static async createAdjective(data: AdjectiveAttributes): Promise<AdjectiveAttributes> {
        return Adjective.create(data);
    }

    private static async getVerbCount(): Promise<number> {
        return Verb.count({}).exec();
    }

    private static async getNounCount(): Promise<number> {
        return Noun.count({}).exec();
    }

    private static async getAdjectiveCount(gender: Gender): Promise<number> {
        return Adjective.count({gender}).exec();
    }
}

export {WordService};
