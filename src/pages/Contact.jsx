import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const response = await fetch(
      "https://formspree.io/f/xaqkkvvb",
      {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <div className="section">
      <h2 className="section-title">
        Let's Work Together
      </h2>

      <form
        className="contact-box"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Tell me about your project..."
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

        {submitted && (
          <p className="success-message">
            ✅ Message Sent Successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;