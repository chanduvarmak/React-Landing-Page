import React, { useState } from 'react';
import axios from 'axios';
import '../form/form.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import ThanksPage from '../thanks/Thanks';

const ValidatingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      try {
        const response = await axios.post('http://localhost:5000/contacts', formData);
        console.log('Form submitted:', response.data);
        toast.success('Form submitted successfully!');
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Error submitting form. Please try again later.');
      }
      console.log('Form submitted:', formData);
    } else {
      setErrors(errors);
    }
  };

  // const validateForm = (data) => {
  //   let errors = {};
  //   if (!data.name.trim()) {
  //     errors.name = 'Name is required';
  //   }
  //   if (data.name.trim().length < 3) {
  //     errors.name = 'Name must be at least 3 characters long';
  //   }
  //   if (!data.email.trim()) {
  //     errors.email = 'Email is required';
  //   } else if (!/\S+@\S+\.\S+/.test(data.email)) {
  //     errors.email = 'Email is invalid';
  //   }
  //   if (!data.message.trim()) {
  //     errors.message = 'Message is required';
  //   }
  //   if (data.message.trim().length > 500) {
  //     errors.message = 'Message must be less than 500 characters';
  //   }
  //   return errors;
  // };
  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    } else if (data.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters long';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.message.trim()) {
      errors.message = 'Message is required';
    } else if (data.message.trim().length > 500) {
      errors.message = 'Message must be less than 500 characters';
    }
    return errors;
  };


  return (
    <>
      <div className="form-container">
        <h2 style={{ display: submitted ? "none" : "block" }}>Contact Us</h2>
        <ToastContainer />
        {submitted ? (
          <ThanksPage />
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </>
  );
};

export default ValidatingForm;
