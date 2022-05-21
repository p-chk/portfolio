import { React, useRef, useState } from "react";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";
import { ToastProvider, useToasts } from "react-toast-notifications";

function ContactMe() {
  const formRef = useRef();
  const { addToast } = useToasts();

  const handleSubmit = (e) => {
    e.preventDefault();

    addToast("Thank you for contacting me! Email Sending... Please wait", {
        appearance: "info",
        autoDismiss: true,
      });

    emailjs
      .sendForm(
        "service_zyduskd",
        "template_ll3kt1j",
        formRef.current,
        "jMie1FkS5vaYBK0vl"
      )
      .then(
        (result) => {
          addToast("Email Sent Successflly, thank you for contacting me", {
            appearance: "success",
            autoDismiss: true,
          });
          document.getElementsByTagName("form")[0].reset();
        },
        (error) => {
            addToast("Thank you for contacting me! Email Sending... Please wait", {
                appearance: "error",
                autoDismiss: true,
              });
        }
      );
  };

  return (
    <div className="contact-me-co">
      <div className="contact-me-bg"></div>
      <div className="contact-me-wrapper">
        <div className="contact-me-info">
          <h1 className="contact-me-title">Let's connect! Submit me this form to get in touch swiftly</h1>
          <div className="contact-me-info-list">
            <div className="contact-me-info-item">
              <i className="fa-solid fa-envelope fa-2x contact-me-info-icon"></i>
              chayakorn.kae@gmail.com
            </div>
            <div className="contact-me-info-item">
              <i className="fa-brands fa-linkedin fa-2x contact-me-info-icon"></i>
              linkedin.com/in/chayakorn-ka/
            </div>
            <div className="contact-me-info-item">
              <i className="fa fa-github-square fa-2x contact-me-info-icon"></i>
              github.com/p-chk
            </div>
          </div>
        </div>
        <div className="contact-me-email">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="Name" name="user_name" required />
            </div>
            <div>
              <input type="text" placeholder="Subject" name="user_subject" required/>
            </div>
            <div>
              <input type="text" placeholder="Email" name="user_email" required/>
            </div>
            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button className="contact-me-email-form">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
