/**
 * @fileoverview Class to fill words to db
 */
import {adjectives} from './adjectives';
import {nouns} from './nouns';
import {verbs} from './verbs';

import {WordService} from '../../modules/words/services/WordService';
class WordsFiller {
    public async fill() {
        await Promise.all([
            this.fillVerbs(),
            this.fillNouns(),
            this.fillAdjectives()
        ]);
    }

    private async fillNouns() {
        await Promise.all(nouns.map((noun) => WordService.createNoun(noun)));
    }

    private async fillVerbs() {
        await Promise.all(verbs.map((verb) => WordService.createVerb(verb)));
    }

    private async fillAdjectives() {
        await Promise.all(adjectives.map((adjective) => WordService.createAdjective(adjective)));
    }
}

export {WordsFiller};
