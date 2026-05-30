function Contact() {
  return (
    <div className="section">

      <h2 className="section-title">
        Let's Work Together
      </h2>

      <form
        className="contact-box"
        action="https://formspree.io/f/xaqkkvvb"
        method="POST"
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

      </form>

    </div>
  );
}

export default Contact;