import {NounAttributes} from '../../modules/word/models/Noun';
import {Gender} from '../../modules/word/constants/Gender';

const nouns: NounAttributes[] = [
    {text: "гнома", gender: Gender.MASCULINE},
    {text: "начальника", gender: Gender.MASCULINE},
    {text: "снеговика", gender: Gender.MASCULINE},
    {text: "коллегу", gender: Gender.MASCULINE},
    {text: "друга", gender: Gender.MASCULINE},
    {text: "зайца", gender: Gender.MASCULINE},
    {text: "курьера", gender: Gender.MASCULINE},
    {text: "таксиста", gender: Gender.MASCULINE},
    {text: "художника", gender: Gender.MASCULINE},
    {text: "единорога", gender: Gender.MASCULINE},
    {text: "героя", gender: Gender.MASCULINE},
    {text: "принца", gender: Gender.MASCULINE},
    {text: "охранника", gender: Gender.MASCULINE},
    {text: "человека", gender: Gender.MASCULINE},
    {text: "злодея", gender: Gender.MASCULINE},
    {text: "дизайнера", gender: Gender.MASCULINE},
    {text: "разработчика", gender: Gender.MASCULINE},
    {text: "исследователя", gender: Gender.MASCULINE},
    {text: "спортсмена", gender: Gender.MASCULINE},
    {text: "сисадмина", gender: Gender.MASCULINE},
    {text: "президента", gender: Gender.MASCULINE},
    {text: "капитана", gender: Gender.MASCULINE},
    {text: "фокусника", gender: Gender.MASCULINE},
    {text: "ученого", gender: Gender.MASCULINE},
    {text: "аспиранта", gender: Gender.MASCULINE},
    {text: "романтика", gender: Gender.MASCULINE},
    {text: "футболиста", gender: Gender.MASCULINE},
    {text: "магистра", gender: Gender.MASCULINE},
    {text: "стриптизера", gender: Gender.MASCULINE},
    {text: "тролля", gender: Gender.MASCULINE},
    {text: "офицера", gender: Gender.MASCULINE},
    {text: "полицейского", gender: Gender.MASCULINE},
    {text: "коррупционера", gender: Gender.MASCULINE},
    {text: "клоуна", gender: Gender.MASCULINE},
    {text: "акробата", gender: Gender.MASCULINE},
    {text: "оболтуса", gender: Gender.MASCULINE},
    {text: "соседа", gender: Gender.MASCULINE},
    {text: "бармена", gender: Gender.MASCULINE},
    {text: "оппозиционера", gender: Gender.MASCULINE},
    {text: "снегурочку",  gender: Gender.FEMININE},
    {text: "пальму",  gender: Gender.FEMININE},
    {text: "зарплату",  gender: Gender.FEMININE},
    {text: "кошку",  gender: Gender.FEMININE},
    {text: "картину",  gender: Gender.FEMININE},
    {text: "витрину",  gender: Gender.FEMININE},
    {text: "лошадь",  gender: Gender.FEMININE},
    {text: "капусту",  gender: Gender.FEMININE},
    {text: "балерину",  gender: Gender.FEMININE},
    {text: "бабушку",  gender: Gender.FEMININE},
    {text: "работу",  gender: Gender.FEMININE},
    {text: "принцессу",  gender: Gender.FEMININE},
    {text: "русалку",  gender: Gender.FEMININE},
    {text: "модель",  gender: Gender.FEMININE},
    {text: "сосиску",  gender: Gender.FEMININE},
    {text: "подругу",  gender: Gender.FEMININE},
    {text: "картошку",  gender: Gender.FEMININE},
    {text: "клубнику",  gender: Gender.FEMININE},
    {text: "остановку",  gender: Gender.FEMININE},
    {text: "вышибалу",  gender: Gender.FEMININE},
    {text: "ёлку",  gender: Gender.FEMININE},
    {text: "собаку",  gender: Gender.FEMININE},
    {text: "корову",  gender: Gender.FEMININE},
    {text: "официантку",  gender: Gender.FEMININE},
    {text: "клавиатуру",  gender: Gender.FEMININE},
    {text: "батарею",  gender: Gender.FEMININE},
    {text: "певицу",  gender: Gender.FEMININE},
    {text: "колбасу",  gender: Gender.FEMININE},
    {text: "машину",  gender: Gender.FEMININE},
    {text: "утку",  gender: Gender.FEMININE},
    {text: "тарелку",  gender: Gender.FEMININE},
    {text: "ухмылку",  gender: Gender.FEMININE},
    {text: "кружку",  gender: Gender.FEMININE},
    {text: "ложку",  gender: Gender.FEMININE},
    {text: "пироженку",  gender: Gender.FEMININE},
    {text: "незнакомку",  gender: Gender.FEMININE},
    {text: "учительницу",  gender: Gender.FEMININE},
    {text: "пепельницу",  gender: Gender.FEMININE},
    {text: "животное", gender: Gender.NEUTER},
    {text: "кино", gender: Gender.NEUTER},
    {text: "вино", gender: Gender.NEUTER},
    {text: "опьянение", gender: Gender.NEUTER},
    {text: "похмелье", gender: Gender.NEUTER},
    {text: "приложение", gender: Gender.NEUTER},
    {text: "домино", gender: Gender.NEUTER},
    {text: "окно", gender: Gender.NEUTER},
    {text: "царство", gender: Gender.NEUTER},
    {text: "море", gender: Gender.NEUTER},
    {text: "бездорожье", gender: Gender.NEUTER},
    {text: "жюри", gender: Gender.NEUTER},
    {text: "дно", gender: Gender.NEUTER},
    {text: "молоко", gender: Gender.NEUTER},
    {text: "солнце", gender: Gender.NEUTER},
    {text: "пиво", gender: Gender.NEUTER},
    {text: "небо", gender: Gender.NEUTER},
    {text: "ведро", gender: Gender.NEUTER},
    {text: "колесо", gender: Gender.NEUTER},
    {text: "сердце", gender: Gender.NEUTER},
    {text: "веретено", gender: Gender.NEUTER},
    {text: "добро", gender: Gender.NEUTER},
    {text: "дупло", gender: Gender.NEUTER},
    {text: "сверло", gender: Gender.NEUTER},
    {text: "алоэ", gender: Gender.NEUTER},
    {text: "сено", gender: Gender.NEUTER},
    {text: "волшебство", gender: Gender.NEUTER},
    {text: "настроение", gender: Gender.NEUTER},
    {text: "любопытство", gender: Gender.NEUTER},
    {text: "колено", gender: Gender.NEUTER},
    {text: "слово", gender: Gender.NEUTER},
    {text: "образование", gender: Gender.NEUTER},
    {text: "развлечение", gender: Gender.NEUTER},
    {text: "искусство", gender: Gender.NEUTER},
    {text: "отношение", gender: Gender.NEUTER},
    {text: "растение", gender: Gender.NEUTER},
    {text: "знакомство", gender: Gender.NEUTER},
    {text: "здоровье", gender: Gender.NEUTER},
    {text: "здание", gender: Gender.NEUTER},
    {text: "общество", gender: Gender.NEUTER},
    {text: "средство", gender: Gender.NEUTER},
    {text: "знание", gender: Gender.NEUTER},
    {text: "сознание", gender: Gender.NEUTER},
    {text: "дело", gender: Gender.NEUTER},
    {text: "ухо", gender: Gender.NEUTER},
    {text: "кольцо", gender: Gender.NEUTER},
    {text: "мясо", gender: Gender.NEUTER},
    {text: "яйцо", gender: Gender.NEUTER},
    {text: "весло", gender: Gender.NEUTER},
    {text: "тело", gender: Gender.NEUTER},
    {text: "масло", gender: Gender.NEUTER},
    {text: "тусовище", gender: Gender.NEUTER},
    {text: "курево", gender: Gender.NEUTER},
    {text: "поле", gender: Gender.NEUTER},
    {text: "озеро", gender: Gender.NEUTER},
    {text: "окончание", gender: Gender.NEUTER},
    {text: "чудо", gender: Gender.NEUTER},
    {text: "варенье", gender: Gender.NEUTER},
    {text: "желание", gender: Gender.NEUTER}
];

































































































export {nouns};
