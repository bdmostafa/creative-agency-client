import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => { console.log(data) }
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
                    placeholder="Your name*"
                />
                {
                    errors.name
                    && <span className="error">Your name is required</span>
                }
                <Form.Control
                    name="company"
                    type="text"
                    ref={register({ required: true })}
                    placeholder="Company's name, designation*"
                />
                {
                    errors.company
                    && <span className="error">Company's name, designation is required</span>
                }
                <Form.Control
                    name="description"
                    type="text"
                    ref={register({ required: true })}
                    placeholder="Project Details*"
                />
                {
                    errors.description
                    && <span className="error mt-3 mb-0">Description is required</span>
                }
                <br />
                <Button
                    className="btn-brand mt-0"
                    type="submit"
                    variant="dark"
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddReview;