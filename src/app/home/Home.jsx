import React from 'react';

import Form from '../form/Form.jsx';
import Generator from '../generator/Generator.jsx';

import styles from './styles.css';

class Home extends React.Component {
    render() {
        const generator = this.renderGenerator();
        const form = this.renderForm();

        return (
            <div className={styles.home}>
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
}

export default Home;
