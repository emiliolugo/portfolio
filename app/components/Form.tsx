import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Construct the form data for Netlify
    const form = event.currentTarget;
    const formDataToSubmit = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formDataToSubmit,
      });

      if (response.ok) {
        setSubmissionStatus('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form fields
      } else {
        setSubmissionStatus('Oops! Something went wrong.');
      }
    } catch (error) {
      setSubmissionStatus('Oops! Something went wrong.');
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="p-4 max-w-md text-white md:w-[70%] mr-auto"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>
      <div className="mb-4">
        <label htmlFor="name" className="block">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2  rounded bg-white/10"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2  rounded bg-white/10"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block">Talk to me!</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full p-2  rounded bg-white/10"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
      >
        Send
      </button>
      {submissionStatus && <p className="mt-4 text-center">{submissionStatus}</p>}
    </form>
  );
};

export default ContactForm;
