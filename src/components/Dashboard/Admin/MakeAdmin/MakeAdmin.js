import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => { console.log(data)}
    return (
        <Row>

        <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                name="email"
                ref={register({ required: true })}
                placeholder="john@gm.com*"
            />
            {
                errors.email
                && <span className="error mt-3 mb-0">Email is required</span>
            }
            <Button
                    className="btn-brand btn-send mt-0"
                    type="submit"
                    variant="dark"
                >
                    Submit
                        </Button>
        </Col>
    </Row>
    );
};

export default MakeAdmin;