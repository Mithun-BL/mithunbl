import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';

const ContactForm = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        fullname: yup.string().required(),
        email: yup.string().required(),
        message: yup.string().required("Message is required"),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });

    return (

        <section className='contactUsForm'>
            <Container>
                <div>
                    <h6>SEND ME A MESSAGE</h6>
                    <p className='mt-md-4 mt-3 mb-4 mb-md-5 pb-md-5'>Send me a message and I'll get back to you in next few hours</p>
                </div>
               
                <div className='miniContainer'>
                    <Formik
                        validationSchema={schema}
                        onSubmit={console.log}
                        initialValues={{
                            fullname: '',
                            email: '',
                            message: '',
                            terms: false,
                        }}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row>
                                    <Form.Group as={Col} md="12" className='mb-4' controlId="validationFormik01">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder='Mithun BL'
                                            name="fullname"
                                            value={values.fullname}
                                            onChange={handleChange}
                                            isValid={!!errors.fullname}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.fullname}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="12" className='mb-4' controlId="validationFormik01">
                                        <Form.Label>Email ID</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder='mithunbl@gmail.com'
                                            name="firstName"
                                            value={values.email}
                                            onChange={handleChange}
                                            isValid={touched.email && !errors.email}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="12" className='mb-4' controlId="validationFormik01">
                                        <Form.Label>Message</Form.Label>
                                        <textarea
                                            placeholder='Let me know what you have in mind'
                                            name="message"
                                            rows={3}
                                            value={values.message}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                    {/* <Form.Group className="mb-3">
                                    <Form.Check
                                        required
                                        name="terms"
                                        label="Agree to terms and conditions"
                                        onChange={handleChange}
                                        isInvalid={!!errors.terms}
                                        feedback={errors.terms}
                                        feedbackType="invalid"
                                        id="validationFormik0"
                                    />
                                </Form.Group> */}
                                    <div className='text-center'>
                                        <button type="submit" className='border-0 btn_bdr'>Submit form</button>
                                    </div>
                                </Row>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Container>
        </section>
    );
}

export default ContactForm;