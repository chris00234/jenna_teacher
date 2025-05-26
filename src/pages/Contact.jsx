import React from 'react';
import { Helmet } from 'react-helmet';
import headshot from '../assets/profile.png';
import '../styles/pages/Contact.css';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact – Jenna Cho</title>
        <meta
          name="description"
          content="Thank you for visiting! Get in touch with Jenna Cho via email or phone."
        />
      </Helmet>

      <section className="contact__container">
        <p className="contact__thankyou">
          Thank you for visiting my teaching portfolio!<br />
          I am passionate about education and always eager to connect with fellow educators,
          parents, and anyone interested in learning more about my teaching journey.<br />
          If you have any questions, comments, or would like to discuss potential
          collaboration opportunities, please feel free to reach out. I look forward to
          hearing from you!
        </p>

        <div className="contact__content">
          <img
            src={headshot}
            alt="Jenna Cho"
            className="contact__photo"
          />
          <div className="contact__info">
            <p><strong>Name:</strong> Jenna Cho</p>
            <p><strong>Cell:</strong> <a href="tel:+12133320153">(213) 332-0153</a></p>
            <p><strong>Email:</strong> <a href="mailto:jennachoteacher@gmail.com">jennachoteacher@gmail.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
