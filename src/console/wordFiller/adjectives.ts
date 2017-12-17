import {AdjectiveAttributes} from '../../modules/word/models/Adjective';
import {Gender} from '../../modules/word/constants/Gender';

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
