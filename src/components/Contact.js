import React from "react";

function Contact({ mode }) {
  const handleSubmit = (event) => event.preventDefault();

  return (
    <section className={`page-shell ${mode === "dark" ? "page-dark" : ""}`}>
      <div className="contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">GET IN TOUCH</span>
          <h1>Let’s build something great together.</h1>
          <p>Have an idea or a question? Send us a message and we’ll get back to you soon.</p>
          <div className="contact-detail">
            <span>✉</span>
            <div><small>Email us</small><strong>hello@textutials.com</strong></div>
          </div>
          <div className="contact-detail">
            <span>⌖</span>
            <div><small>Location</small><strong>India</strong></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label>Name<input type="text" placeholder="Your name" required /></label>
            <label>Email<input type="email" placeholder="you@example.com" required /></label>
          </div>
          <label>Subject<input type="text" placeholder="How can we help?" /></label>
          <label>Message<textarea placeholder="Tell us a little about your project..." rows="5" required /></label>
          <button type="submit" className="primary-button">Send message <span>→</span></button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
