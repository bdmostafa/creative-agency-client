import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:4200/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                email: data.email
            },
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('You have added an admin successfully')
                }
            })
    }
    return (
        <Row style={{width: '90%'}}>
            <Col className="make-admin-box">
            <Form.Label>Email</Form.Label><br />
                <Form onSubmit={handleSubmit(onSubmit)}>
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
                </Form>
            </Col>
        </Row>
    );
};

export default MakeAdmin;