import React, { useState } from "react";
import "./Contact.css"; // Import the external CSS for styling

const Contact = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    // You can add form submission logic here
  };

  return (
    <div className="card">
      <h2>Contact Us</h2>
      <p><b>We'd love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.</b></p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>

      <section className="contact-details">
        <h3>Other Ways to Reach Us:</h3>
        <p><strong>Phone:</strong>9973699623</p>
        <p><strong>Email:</strong>deepakkumar346688@gmail.com</p>
        <p><strong>Address:</strong> bitho sharif ,Gaya,Bihar ,823003</p>
      </section>
    </div>
  );
};

export default Contact;