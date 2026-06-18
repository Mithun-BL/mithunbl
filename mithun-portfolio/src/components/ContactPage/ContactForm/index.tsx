"use client";

import React, { useState, useEffect } from 'react';
import * as formik from 'formik';
import * as yup from 'yup';

const ContactForm = () => {
    const { Formik } = formik;
    const [isGlobalDark, setIsGlobalDark] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const checkDarkTheme = () => {
            const rootBg = document.documentElement.style.getPropertyValue("--background");
            const hasDarkVariable = rootBg === "#000000" || rootBg === "#000" || rootBg.trim() === "rgb(0, 0, 0)";
            setIsGlobalDark(hasDarkVariable);
        };

        checkDarkTheme();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "style") {
                    checkDarkTheme();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["style"],
        });

        return () => observer.disconnect();
    }, []);

    const schema = yup.object().shape({
        fullname: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        message: yup.string().required("Message is required"),
    });

    // Theme styles
    const labelColor = isGlobalDark ? "text-gray-300" : "text-slate-800";
    const inputStyle = isGlobalDark 
        ? "bg-slate-900 border-white/[0.08] text-white focus:border-white/40 placeholder:text-gray-500" 
        : "bg-white border-slate-200 text-black-clr focus:border-black placeholder:text-slate-400";
    const cardBg = isGlobalDark 
        ? "bg-slate-950/45 border border-white/[0.06] shadow-2xl" 
        : "bg-slate-50 border border-black/[0.05] shadow-[0_20px_40px_rgba(0,0,0,0.015)]";

    return (
        <section className="mb-16 px-4 md:px-8">
            <div className="container">
                <div className="text-center md:text-left mb-8">
                    <h6 className="text-xs tracking-[3px] font-bold text-violet-500 uppercase">SEND ME A MESSAGE</h6>
                    <p className="text-3xl md:text-[56px] font-bold leading-tight max-w-[900px] mt-4 mb-6">
                        Send me a message and I&apos;ll get back to you in next few hours
                    </p>
                </div>

                <div className={`${cardBg} rounded-[32px] py-[50px] px-4 md:py-[60px] md:px-8 transition-all duration-500`}>
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
                                    <label htmlFor="fullname" className={`font-semibold block mb-2 text-sm ${labelColor}`}>Name</label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        placeholder="Mithun BL"
                                        name="fullname"
                                        value={values.fullname}
                                        onChange={handleChange}
                                        className={`w-full p-4 rounded-xl border outline-none transition-colors ${inputStyle}`}
                                    />
                                    {touched.fullname && errors.fullname && (
                                        <span className="text-red-500 text-xs mt-1 block">{errors.fullname}</span>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className={`font-semibold block mb-2 text-sm ${labelColor}`}>Email ID</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="mithunbl@gmail.com"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        className={`w-full p-4 rounded-xl border outline-none transition-colors ${inputStyle}`}
                                    />
                                    {touched.email && errors.email && (
                                        <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="message" className={`font-semibold block mb-2 text-sm ${labelColor}`}>Message</label>
                                    <textarea
                                        id="message"
                                        placeholder="Let me know what you have in mind"
                                        name="message"
                                        rows={4}
                                        value={values.message}
                                        onChange={handleChange}
                                        className={`w-full p-4 rounded-xl border outline-none resize-none transition-colors ${inputStyle}`}
                                    />
                                    {touched.message && errors.message && (
                                        <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>
                                    )}
                                </div>

                                <div className="text-center mt-4">
                                    <button type="submit" className="border-0 btn_black cursor-pointer focus:outline-none">
                                        Submit Form
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