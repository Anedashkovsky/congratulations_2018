import React from 'react';

class Form extends React.Component {
    render() {
        const congratulationInput = this.renderCongratulationInput();
        const senderNameInput = this.renderSenderNameInput();
        const button = this.renderButton();
        return (
            <div className="form">
                {congratulationInput}
                {senderNameInput}
                {button}
            </div>
        );
    }

    renderCongratulationInput() {
        return (
            <div className="form__input form__input_congratulation">
                renderCongratulationInput
            </div>
        );
    }

    renderSenderNameInput() {
        return (
            <div className="form__input form__input_sender-name">
                renderSenderNameInput
            </div>
        );
    }

    renderButton() {
        return (
            <div className="form__button">
                renderButton
            </div>
        );
    }
}

export default Form;
