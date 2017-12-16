import {NounAttributes} from '../../modules/words/models/Noun';
import {Gender} from '../../modules/words/constants/Gender';

const nouns: NounAttributes[] = [
    {
        text: 'гнома',
        gender: Gender.MASCULINE
    },
    {
        text: 'фею',
        gender: Gender.FEMININE
    },
    {
        text: 'веревку',
        gender: Gender.FEMININE
    }
];

export {nouns};
