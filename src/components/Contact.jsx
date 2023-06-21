import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/moqzobzw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setFormData({
        fullName: '',
        email: '',
        message: ''
      });
      alert('Form submitted successfully!');
    } else {
      alert('Form submission failed!');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container mb-5">
            <div className="col-12 text-center py-4 my-4">
                <h1>Have Some Question?</h1>
                <hr />
            </div>
      </div>
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center">
          <img src="./assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleForm" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleForm"
                name="fullName"
                placeholder="John Smith"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
