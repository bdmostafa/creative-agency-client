import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './ContactUs.css'

const ContactUs = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => { console.log(data)}
    return (
        <Container className="pt-5 pb-5">
            <Row>
                <Col sm={12} md={5}>
                    <h2 className="heading-line mb-3">
                        Let us handle your
                        <br />
                        project, professionally.
                    </h2>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general. </p>
                </Col>
                <Col sm={12} md={7} style={{textAlign: "center"}}>
                    <Form
                        className="contact-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Form.Control
                            name="email"
                            type="email"
                            ref={register({ required: true })}
                            placeholder="Your email address*"
                        />
                        {
                            errors.email
                            && <span className="error">Email is required</span>
                        }
                        <Form.Control
                            name="name"
                            type="text"
                            ref={register({ required: true })}
                            placeholder="Your name / company's name*"
                        />
                        {
                            errors.name
                            && <span className="error">Your name / company name is required</span>
                        }
                        <Form.Control
                            name="message"
                            type="text"
                            ref={register({ required: true })}
                            placeholder="Your message*"
                        />
                        {
                            errors.message
                            && <span className="error mt-3 mb-0">Message is required</span>
                        }
                        <br />
                        <Button
                            className="btn-brand mt-0"
                            type="submit"
                            variant="dark"
                        >
                            SEND
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;