"use client";

import React from 'react';
import * as formik from 'formik';
import * as yup from 'yup';

const ContactForm = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        fullname: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        message: yup.string().required("Message is required"),
    });

    return (
        <section className="mb-[90px] md:mb-[120px] px-4 md:px-8">
            <div className="container">
                <div className="text-center md:text-left mb-8">
                    <h6 className="text-sm tracking-[2px] font-bold text-gray-500 uppercase">SEND ME A MESSAGE</h6>
                    <p className="text-3xl md:text-[56px] font-bold leading-tight max-w-[900px] mt-4 mb-6">
                        Send me a message and I&apos;ll get back to you in next few hours
                    </p>
                </div>

                <div className="bg-gradient-to-br from-[#ebf0fa] to-[#e5d7fc] rounded-[32px] py-[50px] px-4 md:py-[60px] md:px-8 transition-all duration-300">
                    <Formik
                        validationSchema={schema}
                        onSubmit={(values, { resetForm }) => {
                            console.log("Form values:", values);
                            resetForm();
                        }}
                        initialValues={{
                            fullname: '',
                            email: '',
                            message: '',
                        }}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <form noValidate onSubmit={handleSubmit} className="max-w-[640px] mx-auto flex flex-col gap-6">
                                <div>
                                    <label htmlFor="fullname" className="text-black font-semibold block mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        placeholder="Mithun BL"
                                        name="fullname"
                                        value={values.fullname}
                                        onChange={handleChange}
                                        className="w-full p-4 rounded-xl border border-transparent bg-white shadow-none focus:outline-none placeholder:text-[#4a4342]/50 placeholder:text-sm placeholder:font-medium focus:border-purple-300 transition-colors"
                                    />
                                    {touched.fullname && errors.fullname && (
                                        <span className="text-red-500 text-xs mt-1 block">{errors.fullname}</span>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-black font-semibold block mb-2">Email ID</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="mithunbl@gmail.com"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        className="w-full p-4 rounded-xl border border-transparent bg-white shadow-none focus:outline-none placeholder:text-[#4a4342]/50 placeholder:text-sm placeholder:font-medium focus:border-purple-300 transition-colors"
                                    />
                                    {touched.email && errors.email && (
                                        <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="message" className="text-black font-semibold block mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        placeholder="Let me know what you have in mind"
                                        name="message"
                                        rows={4}
                                        value={values.message}
                                        onChange={handleChange}
                                        className="w-full p-4 rounded-xl border border-transparent bg-white shadow-none focus:outline-none placeholder:text-[#4a4342]/50 placeholder:text-sm placeholder:font-medium resize-none focus:border-purple-300 transition-colors"
                                    />
                                    {touched.message && errors.message && (
                                        <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>
                                    )}
                                </div>

                                <div className="text-center mt-4">
                                    <button type="submit" className="border-0 btn_bdr cursor-pointer focus:outline-none">
                                        Submit form
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;