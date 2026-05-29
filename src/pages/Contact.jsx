function Contact() {
  return (
    <div className="section">

      <h2 className="section-title">
        Let's Work Together
      </h2>

      <div className="contact-box">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Tell me about your project..."
        ></textarea>

        <button>
          Send Message
        </button>

      </div>

    </div>
  );
}

export default Contact;