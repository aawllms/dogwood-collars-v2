import React, { useState } from "react";
import "../css/ContactUs.css";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    // using an API call (e.g., fetch, axios).
    const formData: FormData = { name, email, message };
    console.log("Form submitted:", formData);

    // Simulate a successful submission
    setTimeout(() => {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 500); // Simulate a delay for the API call
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      {submitted ? (
        <div className="success-message">
          <p>
            Thank you for your message! We'll get back to you as soon as
            possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Question/Comments:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ContactUs;
