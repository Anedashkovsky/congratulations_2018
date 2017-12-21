import React from 'react';
import axios from 'axios';

import styles from './styles.css';
import ball from './ball.png';

class Genarator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: 'С Наступающим Новым годом!'
        };

        this.xhr = new XMLHttpRequest();
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

    renderTextField() {
        return (
            <div className={styles.field}>
                {this.state.text}
            </div>
        );
    }

    renderButton() {
        return (
            <div className={styles.button}
                onClick={this.onButtonClick.bind(this)}>

                <img className={styles.button__img} src={ball}/>
                <div className={styles.button__text}>
                    получить новое пожелание
                </div>
            </div>
        );
    }

    onButtonClick() {
        this.updateText();
    }

    updateText() {
        // const url =
        //     'https://new-year-2018-backend.herokuapp.com/phrase/generated';

        // axios.get(url).then(res => {
        //     console.log(res.data);
        //     const text = res.data;
        //     this.setState({text});
        // });
        this.setState({text: 'Happy New Year!'});
    }
}

export default Genarator;
