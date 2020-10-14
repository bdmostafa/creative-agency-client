import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => { console.log(data)}

    return (
        <div>
            <Form
                        className="order-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
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
                            name="service"
                            type="text"
                            ref={register({ required: true })}
                            placeholder="Your service name*"
                            defaultValue="graphic"
                        />
                        {
                            errors.service
                            && <span className="error">Service name is required</span>
                        }
                        <Form.Control
                            name="details"
                            type="text"
                            ref={register({ required: true })}
                            placeholder="Project Details*"
                        />
                        {
                            errors.details
                            && <span className="error mt-3 mb-0">Project details is required</span>
                        }
                        <Form.Control
                            name="price"
                            type="text"
                            ref={register({ required: true })}
                            placeholder="Price*"
                            defaultValue="price from db"
                        />
                        {
                            errors.service
                            && <span className="error">Price is required</span>
                        }
                        <Form.Control
                            name="pic"
                            type="file"
                            ref={register({ required: true })}
                            placeholder="Upload*"
                        />
                        <br />
                        <Button
                            className="btn-brand mt-0"
                            type="submit"
                            variant="dark"
                        >
                            SEND
                        </Button>
                    </Form>
        </div>
    );
};

export default PlaceOrder;