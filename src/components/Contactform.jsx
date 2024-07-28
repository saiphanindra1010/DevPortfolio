import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';
import "./styles/Contactform.css";
const env = import.meta.env;
export const Contactform = () => {
  const form = useRef();
  const quillRef = useRef(null);
  const [editorValue, setEditorValue] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_subject: '',
    user_email: '',
  });
  const [errors, setErrors] = useState({
    user_name: '',
    user_subject: '',
    user_email: '',
  });

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]{2,30}$/;
    return regex.test(name);
  };

  const validateSubject = (subject) => {
    const regex = /^.{5,100}$/;
    return regex.test(subject);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    let errorMessage = '';
    if (name === 'user_name') {
      errorMessage = validateName(value) ? '' : 'Name should be 2-30 characters long and contain only letters and spaces.';
    } else if (name === 'user_subject') {
      errorMessage = validateSubject(value) ? '' : 'Subject should be 5-100 characters long.';
    } else if (name === 'user_email') {
      errorMessage = validateEmail(value) ? '' : 'Please enter a valid email address.';
    }
    
    setErrors({ ...errors, [name]: errorMessage });
  };

  const resetForm = () => {
    setFormData({
      user_name: '',
      user_subject: '',
      user_email: '',
    });
    setEditorValue('');
    setErrors({
      user_name: '',
      user_subject: '',
      user_email: '',
    });
    if (form.current) {
      form.current.reset();
    }
    if (quillRef.current) {
      quillRef.current.getEditor().setText('');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Validate all fields before submitting
    const nameError = validateName(formData.user_name) ? '' : 'Name is invalid.';
    const subjectError = validateSubject(formData.user_subject) ? '' : 'Subject is invalid.';
    const emailError = validateEmail(formData.user_email) ? '' : 'Email is invalid.';
    
    setErrors({
      user_name: nameError,
      user_subject: subjectError,
      user_email: emailError,
    });

    // If there are no errors, proceed with form submission
    if (!nameError && !subjectError && !emailError) {
      emailjs
        .sendForm('service_9zany2b', 'template_41p4loj', form.current, {
          publicKey: env.VITE_EMAIL_Public_Token,
        })
        .then(
          (result) => {
            toast('😊Thanks for sending a Message!!!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark"
            });
            resetForm(); // Reset the form after successful submission
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast('❌ FAILED Please leave your message to saiphanindra1010@gmail.com', {
              position: "top-right",
              autoClose: 10000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          },
        );
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <section className="form">
          <h2 className="section-title form-title">Contact Me 📥</h2>
          <div className="form-sec">
            <div className="input-field">
              <label>Name</label>
              <input
                className="input"
                name="user_name"
                type="text"
                value={formData.user_name}
                onChange={handleInputChange}
              />
              {errors.user_name && <span className="error">{errors.user_name}</span>}
            </div>
            <div className="input-field">
              <label>Subject</label>
              <input
                className="input2"
                name="user_subject"
                type="text"
                value={formData.user_subject}
                onChange={handleInputChange}
              />
              {errors.user_subject && <span className="error">{errors.user_subject}</span>}
            </div>
            <div className="input-field">
              <label>Email</label>
              <input
                className="input2"
                name="user_email"
                type="email"
                value={formData.user_email}
                onChange={handleInputChange}
              />
              {errors.user_email && <span className="error">{errors.user_email}</span>}
            </div>
            <div className="input-field">
              <label>Message</label>
              <ReactQuill
                ref={quillRef}
                value={editorValue}
                onChange={(value) => setEditorValue(value)}
              />
            </div>
            <input
              type="hidden"
              className="form-control"
              name="message"
              defaultValue={editorValue}
            />
            <div className="center-btn">
              <button className="btn cnter">Send</button>
            </div>
          </div>
        </section>
        <ToastContainer
          position="top-right"
          autoClose={1}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </form>
    </>
  );
};