/**
 * @fileoverview Script, that start fill words to db
 */
import {WordsFiller} from './wordFiller/WordsFiller';

if (!module.parent) {
    (async() => {
        const wordsFiller = new WordsFiller();
        await wordsFiller.fill();
        console.log('Db filled');
    })();
}
