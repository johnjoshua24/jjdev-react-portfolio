import React, { useRef } from "react";
import "../styles/Contact.css";
import locationicon from "../assets/location-icon.png";
import callicon from "../assets/call-icon.png";
import emailicon from "../assets/email-icon.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "../globals/global.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ec8f80a5-ab17-43e0-80ce-6bb4fa75f162");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      const successMessage = "Form Submitted Successfully";
      setResult(successMessage);
      event.target.reset();
      alert(successMessage);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const contactContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contactContainerRef,
    offset: ["start end", "end end"],
  });
  const contactTitleOpacityAnimation = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    { stiffness: 60, damping: 15 }
  );
  const contactTitleSlideAnimation = useSpring(
    useTransform(scrollYProgress, [0, 1], [-70, 0]),
    { stiffness: 60, damping: 15 }
  );

  const contactInfoOpacityAnimation = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    { stiffness: 60, damping: 15 }
  );
  const contactInfoSlideAnimation = useSpring(
    useTransform(scrollYProgress, [0, 1], [-70, 0]),
    { stiffness: 60, damping: 15 }
  );

  const nameEmailSubjectOpacityAnimation = useSpring(
    useTransform(scrollYProgress, [0.6, 1], [0, 1]),
    { stiffness: 60, damping: 15 }
  );

  const messageOpacityAnimation = useSpring(
    useTransform(scrollYProgress, [0.6, 1], [0, 1]),
    { stiffness: 60, damping: 15 }
  );

  const sendBtnOpacityAnimation = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    { stiffness: 60, damping: 15 }
  );
  const sendBtnSlideAnimation = useSpring(
    useTransform(scrollYProgress, [0, 1], [-50, 0]),
    { stiffness: 60, damping: 15 }
  );

  return (
    <div
      className="contact-container flex flex-col align-center justify-center mb-50"
      id="contact-section"
      ref={contactContainerRef}
    >
      <div className="contact-title-sections flex align-center justify-center gap-1">
        <motion.div
          className="contact-title-left flex align-center justify-center pr-4"
          style={{
            opacity: contactTitleOpacityAnimation,
            y: contactTitleSlideAnimation,
          }}
        >
          <h1>CONTACT ME</h1>
        </motion.div>
        <hr className="vertical-line mt-1" />
        <hr className="vertical-line mt-1" />
        <motion.div
          className="contact-title-right flex flex-col align-center justify-center gap-4 pl-4"
          style={{
            opacity: contactInfoOpacityAnimation,
            y: contactInfoSlideAnimation,
          }}
        >
          <div className="address-container flex gap-3">
            <img src={locationicon} />
            <p>
              Address // Santa Lucia City of San Fernando Pampanga, Philippines,
              2000
            </p>
          </div>
          <div className="phone-container flex gap-3">
            <img src={callicon} />
            <p>Phone // (+63) 9302738382</p>
          </div>
          <div className="email-container flex gap-3">
            <img src={emailicon} />
            <p>
              E-Mail //{" "}
              <a href="mailto:canlas.johnjoshua24@gmail.com">
                canlas.johnjoshua24@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      <form
        onSubmit={onSubmit}
        className="form-container flex flex-col items-center justify-center mt-20"
      >
        <div className="form-container-sections flex gap-4">
          <div className="form-section-left flex flex-col gap-4">
            <motion.input
              style={{ opacity: nameEmailSubjectOpacityAnimation }}
              type="text"
              name="name"
              id="name"
              placeholder="Your Name/Company Name"
              required
            />
            <motion.input
              style={{ opacity: nameEmailSubjectOpacityAnimation }}
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              required
            />
            <motion.textarea
              style={{ opacity: nameEmailSubjectOpacityAnimation }}
              name="subject"
              id="subject"
              placeholder="Subject"
              required
              pattern="^[a-zA-Z\s]*$"
            ></motion.textarea>
            <label style={{ display: "none" }} htmlFor="honeypot">
              Leave this field empty
            </label>
            <input
              type="text"
              name="honeypot"
              id="honeypot"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />
          </div>
          <div className="form-section-right">
            <motion.textarea
              name="message"
              id="message"
              placeholder="Type your message here..."
              pattern="^[a-zA-Z\s]*$"
              style={{ opacity: messageOpacityAnimation }}
            ></motion.textarea>
          </div>
        </div>

        <div className="button-send-container flex items-center justify-center mt-4">
          <motion.button
            type="submit"
            style={{
              opacity: sendBtnOpacityAnimation,
              y: sendBtnSlideAnimation,
            }}
          >
            <span>Send</span>
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
