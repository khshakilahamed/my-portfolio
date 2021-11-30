import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { Fade } from 'react-reveal';
import email from '../../../images/email.png';
import swal from 'sweetalert';

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_2q9hr0g', 'template_dbnhsug', e.target, 'user_yDK2Jc1x9UDPFkUOlmfjn')
            .then((result) => {
                if (result.text) {
                    swal({
                        title: "Thank You!",
                        text: "We got your message!",
                        icon: "success",
                    });
                    e.target.reset();
                }
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="container my-5 py-5" id="contact">
            <h2 className="text-center mb-5" >Contact With Me</h2>
            <div className="row">
                <Fade left>
                    <div className="col-md-5">
                        <img className="img-fluid" src={email} alt="" />
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-md-7">
                        <form onSubmit={sendEmail} className="contact-form">
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <input type="text" name="subject" placeholder="Subject" required />
                            <textarea name="message" name="message" id="" cols="30" rows="5" placeholder="write your message here" required />
                            <input type="submit" value="Send message" className="btn btn-dark" />
                        </form>
                    </div>
                </Fade>
            </div>
        </div >
    );
};

export default Contact;