import React from 'react';

import Form from '../form/Form.jsx';
import Generator from '../generator/Generator.jsx';

import styles from './styles.css';

class Home extends React.Component {
    render() {
        const generator = this.renderGenerator();
        // const botInfo = this.renderBotInfo();
        const form = this.renderForm();

        return (
            <div className={styles.home}>
                {generator}

                <div className={styles.interaction_board}>
                    {/* {botInfo} */}
                    {form}
                </div>
            </div>
        );
    }

    renderGenerator() {
        return (
            <div className="home__generator">
                <Generator />
            </div>
        );
    }

    // renderBotInfo() {
    //     return (
    //         <div className="home__bot-info">
    //             <BotInfo />
    //         </div>
    //     );
    // }

    renderForm() {
        return (
            <div className="home__form">
                <Form />
            </div>
        );
    }
}

export default Home;
