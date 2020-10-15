import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './AddService.css';


const AddService = () => {
    const history = useHistory();

    const { register, errors, handleSubmit } = useForm();

    const handleImage = () => {
        document.getElementById('image').click();
    }


    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        const totalData = JSON.stringify({
            title: data.title,
            description: data.description,
            price: data.price
        });

        formData.append('total', totalData)
        formData.append('file', data.icon[0]);

        fetch('http://localhost:4200/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('You added a service successfully.')
                    history.replace('/dashboard/admin')
                }
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="add-service-form">
                    <Row>
                        <Col md={5}>
                            <Form.Label>Service Title</Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                ref={register({ required: true })}
                                placeholder="Enter service title*"
                            />
                            {
                                errors.title
                                && <span className="error">Service title is required</span>
                            }

                        </Col>
                        <Col md={5}>
                            <Form.Label>Icon</Form.Label>
                            <Form.Control
                                name="icon"
                                type="file"
                                hidden
                                id="image"
                                ref={register({ required: true })}
                            />
                            <br />
                            <Button
                                className="btn-upload"
                                onClick={handleImage}
                                // type="button"
                            >
                                <i class="fas fa-cloud-upload-alt"></i>
                                {' '} Upload Image
                            </Button>
                            <br />
                            {
                                errors.icon
                                && <span className="error">Icon image is required</span>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea" rows={3}
                                name="description"
                                ref={register({ required: true })}
                                placeholder="Project Details*"
                            />
                            {
                                errors.description
                                && <span className="error mt-3 mb-0">Description is required</span>
                            }
                        </Col>
                        <Col md={5}>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                name="price"
                                type="number"
                                ref={register({ /*required: true */ })}
                                placeholder="Price for this service"
                            />
                            {
                                errors.price
                                && <span className="error mt-3 mb-0">Price is required</span>
                            }
                        </Col>
                    </Row>
                </div>
                <Row className="btn-row">
                    <Button
                        className="btn-brand btn-send mt-0"
                        type="submit"
                        variant="dark"
                    >
                        Submit
                    </Button>
                </Row>
            </Form>
        </div>
    );
};

export default AddService;