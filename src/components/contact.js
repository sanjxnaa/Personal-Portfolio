import React,{useRef} from "react";
import './contact.css';
import fbIcon from '../assets/facebook-icon.png';
import instaIcon from '../assets/instagram.png';
import twitIcon from '../assets/twitter.png';
import linkdin from '../assets/linkdin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zyadosr', 'template_5yrgyhr', form.current, '1Mfcox8Tvi2RtWMq0')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');
          }, (error) => {
              console.log(error.text);
          });
    };
    return(
        <section id="contactPage">
            <div id="certificates">
                <h1 className="CertTitle">My Certifications</h1>
                <p className="Desc">I have had the oppurtunity to learn from many organisations on various E-learning platforms like COursera and Udemy. Some of the certifications are included below</p>
                <ul>
                    <li> Google Data Analytics Specialization (2023)</li>
                    <li> Data Analysis Using Python - IBM (2022) </li>
                    <li> Machine Learning Specialization – DeepLearning.AI (2023) </li>
                    <li> Introduction to Packet Tracer – Cisco Networking Academy (2023) </li>
                    <li> Spoken Tutorial Project at IIT Bombay
                        <ul className="sublist">
                            <li> Certificate For Completion of C Training</li>
                            <li> Certificate For Completion of Advanced Cpp Training</li>
                            <li> Certificate For Completion of Python 3.4.3 Training</li>
                        </ul> 
                    </li>
                    <li> 100 Days of Code: The Complete Python Pro Bootcamp for 2023 – Udemy</li>
                    <li> Advanced Data Science Capstone – IBM (2023)</li>
                    <li> Prompt Engineering for ChatGPT – Vanderbilt University (2023) </li>
                </ul>
            </div>
            <div id="contact">
                <h1 className="contactTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form ref={form} className="contactForm" onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="user_name" />
                    <input type="email" className="email" placeholder="Your E-mail" name="user_email" />
                    <textarea name="message" className="msg" rows='5' placeholder="Your Message" ></textarea>
                    <button className="submitBtn" type="submit" value='Send'>Submit</button>
                    <div className="links">
                        <img src={fbIcon} alt="facebook" className="link" />
                        <img src={instaIcon} alt="instagram" className="link" />
                        <img src={twitIcon} alt="twitter" className="link" />
                        <a href="https://www.linkedin.com/in/sanjana-gowda-cs/" target="_blank"><img src={linkdin} alt="linkdin" className="link" /></a>
                    </div>
                </form>
            </div>
        </section>
    )
} 

export default Contact;