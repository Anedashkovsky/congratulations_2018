import {AdjectiveAttributes} from '../../modules/words/models/Adjective';
import {Gender} from '../../modules/words/constants/Gender';

const adjectives: AdjectiveAttributes[] = [
    {
        text: 'веселого',
        gender: Gender.MASCULINE
    },
    {
        text: 'страшную',
        gender: Gender.FEMININE
    },
    {
        text: 'красивую',
        gender: Gender.FEMININE
    }
];

export {adjectives};
