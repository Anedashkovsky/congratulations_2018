import React from 'react';

import Form from '../form/Form.jsx';
import Generator from '../generator/Generator.jsx';

import tree from './images/tree.png';
import mainTree from './images/tree_main.png';
import bottomTree from './images/tree_bottom.png';

import topGarland from './images/garland_top.png';
import mainGarland from './images/garland_main.png';

import styles from './styles.css';

class Home extends React.Component {
    render() {
        const generator = this.renderGenerator();
        const form = this.renderForm();
        const background = this.renderBackground();

        return (
            <div className={styles.home}>
                {background}

                <div className={styles.content}>
                    {generator}
                    {form}
                </div>
            </div>
        );
    }

    renderGenerator() {
        return (
            <div className={styles.generator}>
                <Generator />
            </div>
        );
    }

    renderForm() {
        return (
            <div className={styles.form}>
                <Form />
            </div>
        );
    }

    renderBackground() {
        return (
            <div className={styles.background}>
                <img className={styles.garland__img_top} src={topGarland}/>
                <img className={styles.garland__img_bottom} src={mainGarland}/>

                <img className={styles.tree__img_left} src={tree}/>
                <img className={styles.tree__img_main} src={mainTree}/>
                <img className={styles.tree__img_right} src={tree}/>
                <img className={styles.tree__img_bottom} src={bottomTree}/>
            </div>
        );
    }
}

export default Home;
