import React from 'react';
import axios from 'axios';

import styles from './styles.css';
import ball from './ball.png';

class Genarator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            isFieldAnimated: false,
            isButtonAnimated: false
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
        const plaseholder = this.renderFieldPlaceholder();

        const className = `${styles.field} ` +
            (this.state.isFieldAnimated ? styles.field_animated : '');

        return (
            <div className={className}
                onAnimationEnd={this.onFieldAnimationEnd.bind(this)}>

                    <div className={styles.field__text}>
                        Желаем в Новом году
                    </div>

                    <div className={styles.field__generator}>
                        <div className={`${styles.field__text} ${styles.field__text_generated}`}>
                            {this.state.text}
                        </div>
                        {plaseholder}
                    </div>
            </div>
        );
    }

    renderFieldPlaceholder() {
        return (
            <div className={styles.field__placeholder}>
                <div>С наступающим</div>
                <div>С Новым 2018 годом</div>
                <div>Поздравляем</div>
                <div>С Праздником</div>
                <div>Желаем в наступающем</div>
                <div>Поздравляем с праздником</div>
                <div>Желаем в Новом году</div>
            </div>
        );
    }

    renderButton() {
        const className = `${styles.button} ` +
            (this.state.isButtonAnimated ? styles.button_animated : '');

        return (
            <div className={className}
                onClick={this.onButtonClick.bind(this)}
                onAnimationEnd={this.onButtonAnimationEnd.bind(this)}>

                <div className={styles.button__img}>
                    <div className={styles.button__img__string}></div>
                    <img className={styles.button__img__ball} src={ball}/>
                </div>

                <div className={styles.button__text}>
                    сгенерировать новое пожелание
                </div>
            </div>
        );
    }

    onButtonClick() {
        this.setState({isButtonAnimated: true});

        this.setState({isFieldAnimated: true});
        this.updateText();
    }

    onFieldAnimationEnd() {
        this.setState({isFieldAnimated: false});
    }

    onButtonAnimationEnd() {
        this.setState({isButtonAnimated: false});
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
