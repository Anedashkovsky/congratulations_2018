import React from 'react';
import axios from 'axios';

import styles from './styles.css';
import ball from './ball_size_s.png';

const descriptionTextPart1 = `Привет! Это наш поздравительный чат-бот. Добавь его в\
    телеграме и каждый день получай поздравления с Новым годом\
    от сотрудников нашей компании.`;

const descriptionTextPart2 = `Если тебе самому есть, чего пожелать коллегам,\
    напиши своё пожелание в поле рядом. Будь уверен,\
    что кто-нибудь его обязательно получит.`;

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            author: ''
        };
    }

    render() {
        const description = this.renderDescription();
        const interaction = this.renderInteraction();

        return (
            <div className={styles.form}>
                {interaction}
                {description}
            </div>
        );
    }

    renderDescription() {
        return (
            <div className={styles.description}>
                <a className={styles.description__title}
                    href="https://t.me/samyiPrazdnichnyiBot">
                    @samyiPrazdnichnyiBot
                </a>
                <div className={styles.description__text}>
                    <div className={styles.description__part}>
                        {descriptionTextPart1}
                    </div>
                    <div className={styles.description__part}>
                        {descriptionTextPart2}
                    </div>
                </div>
            </div>
        );
    }

    renderInteraction() {
        const congratulationTextarea = this.renderCongratulationTextarea();
        const senderNameTextarea = this.renderAuthorTextarea();
        const button = this.renderButton();

        return (
            <form className={styles.interaction}>
                {congratulationTextarea}
                {senderNameTextarea}
                {button}
            </form>
        );
    }

    renderCongratulationTextarea() {
        return (
            <textarea className={`${styles.textarea} ${styles.textarea_congratulation}`}
                value={this.state.text}
                placeholder="Пожелание"
                onChange={this.onCongratulationChange.bind(this)}/>
        )
    }

    renderAuthorTextarea() {
        return (
            <textarea className={`${styles.textarea} ${styles.textarea_author}`}
                value={this.state.author}
                placeholder="Твоя подпись"
                maxLength="30"
                onChange={this.onAuthorChange.bind(this)}/>
        );
    }

    renderButton() {
        return (
            <div className={styles.interaction__button}
                onClick={this.onButtonClick.bind(this)}>
                Отправить
                <img className={styles.interaction__button__img} src={ball}/>
            </div>
        );
    }

    onButtonClick() {
        axios({
            method: 'post',
            url: '/phrase',
            data: this.state
        }).then(res => {
            this.setState({});;
        });
    }

    onCongratulationChange(event) {
        const state = Object.assign(this.state, {
            text: event.target.value
        });

        this.setState(state);
    }

    onAuthorChange(event) {
        const state = Object.assign(this.state, {
            author: event.target.value
        });

        this.setState(state);
    }
}

export default Form;
