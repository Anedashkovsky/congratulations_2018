import React from 'react';
import axios from 'axios';

import styles from './styles.css';
import ball from './ball.png';

class Genarator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        };
    }

    render() {
        const textField = this.renderTextField();
        const button = this.renderButton();

        return (
            <div className={styles.generator}>
                {textField}
                {button}
            </div>
        );
    }

    componentWillMount() {
        this.updateText();
    }

    renderTextField() {
        return (
            <div className={styles.field}>
                Желаем в Новом году {this.state.text}
            </div>
        );
    }

    renderButton() {
        return (
            <div className={styles.button}
                onClick={this.onButtonClick.bind(this)}>

                <div className={styles.button__img__string}></div>
                <img className={styles.button__img} src={ball}/>
                <div className={styles.button__text}>
                    сгенерировать новое пожелание
                </div>
            </div>
        );
    }

    onButtonClick() {
        this.updateText();
    }

    updateText() {
        const url = '/phrase/generated';

        axios.get(url).then(res => {
            const text = res.data.text;
            this.setState({text});
        });
    }
}

export default Genarator;
