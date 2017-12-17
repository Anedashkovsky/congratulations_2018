import {NounAttributes} from '../../modules/word/models/Noun';
import {Gender} from '../../modules/word/constants/Gender';

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
