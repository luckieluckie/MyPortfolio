import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.EMAILJS_SERVICE_ID,
                import.meta.env.EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Aayush',
                    from_email: form.email,
                    to_email: 'aayusharingan@gmail.com',
                    message: form.message,
                },
                import.meta.env.EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert('Thank you. I will get back to you as soon as possible.');

                    setForm({
                        name: '',
                        email: '',
                        message: '',
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert('Ahh, something went wrong. Please try again.');
                }
            );
    };

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <div className="contact-container border border-black-300 bg-black-200 rounded-lg p-5 sm:p-10 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white hover:shadow-[0px_0px_30px_0px_rgba(16,185,129,0.4)]">
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you want to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
                    </p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col gap-7"
                    >
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your good name?"
                                className="field-input"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your web address?"
                                className="field-input"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Message</span>
                            <textarea
                                rows={5}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What you want to say?"
                                className="field-input"
                            />
                        </label>

                        <button
                            type="submit"
                            className="field-btn"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
