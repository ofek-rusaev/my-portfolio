import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };



    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        let submitBtn = document.getElementById('submit');
        submitBtn.value = 'MESSAGE SENT! (:';
        e.preventDefault();
        emailjs
            .sendForm(
                'gmail',
                'portfolio_contact_me',
                '.contact-form-class',
                'user_3AQmD7PuSm7JSuYNbDlad'
            )
            .then()
            .catch();
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    };


    render() {
        const phoneIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} />;
        const emailIcon = <FontAwesomeIcon icon={faEnvelopeSquare} />;

        return (
            <div id="contact" className="contact">
                <section className="section-title">
                    <h2>GET IN TOUCH</h2>
                    {/* <p>Tel: +972(502)776771 || Email: ofek2602@gmail.com</p> */}
                    <p>Thanks for stopping by</p>
                    <p>Please feel free to drop me a message</p>
                </section>

                <form
                    onSubmit={this.handleSubmit.bind(this)}
                    className="contact-form-class"
                >

                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)} />

                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)} />

                    <div>
                        <textarea name="message" id="message" placeholder="Message"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this)} cols="30" rows="10"></textarea>
                        <input className="contact-form-submit" id="submit" type="submit" value="SEND A MESSAGE" />
                    </div>
                </form>
                <div className="contact-info">
                    {/* <p><span>{emailIcon}</span> ofek2602@gmail.com &nbsp;&nbsp;||&nbsp;&nbsp;
                     <span>{phoneIcon}</span> +972(502)776771</p> */}
                    <p><span>{emailIcon}</span> ofek2602@gmail.com</p>
                    <p><span>{phoneIcon}</span> +972(502)776771</p>
                </div>
            </div>
        );
    }
}

export default Contact;