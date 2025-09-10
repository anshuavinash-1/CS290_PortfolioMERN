import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Footer from './Footer';
import emailjs from 'emailjs-com';

const ContactPage = () => {
    // Validation schema
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    // Handle form submission
    const handleSubmit = (values, { resetForm, setSubmitting }) => {
        // Sending data with EmailJS
        emailjs.send('SERVICE_ID', 'TEMPLATE_ID', values, 'USER_ID')
            .then((result) => {
                console.log('Success:', result.text);
                alert('Message sent successfully!');
                resetForm();
            }, (error) => {
                console.error('Error:', error.text);
                alert('Failed to send message, please try again later.');
            })
            .finally(() => setSubmitting(false));
    };

    return (
        <div className="main">
            <h2>Contact Us</h2>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field type="text" id="name" name="name" />
                            <ErrorMessage name="name" component="div" className="error-message"  />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <Field as="textarea" id="message" name="message" />
                            <ErrorMessage name="message" component="div" className="error-message" />
                        </div>
                        <button className='submit-button' type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </button>
                    </Form>
                )}
            </Formik>
            <Footer />
        </div>
    );
};

export default ContactPage;
