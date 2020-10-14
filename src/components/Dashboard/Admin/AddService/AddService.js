import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './AddService.css';


const AddService = () => {
    const history = useHistory();

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        const totalData = JSON.stringify({
            title: data.title,
            description: data.description
        });

        formData.append('total', totalData)
        formData.append('file', data.icon[0]);

        fetch('http://localhost:4200/addService', {
            method: 'POST',
            // headers: { 'Content-type': 'application/json' },
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('You added a service successfully.')
                    history.replace('/')
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
                            {/* <div className='file-upload' 
                                    style={{background:`url(${upload}) no-repeat`, backgroundSize:'30px 30px'}}>
                                    <input type="file"/>
                                    <p style={{color:'#009444',margin:'0', marginLeft:'5px'}}>Upload image</p>
                                </div> */}
                            <Form.Control
                                name="icon"
                                type="file"
                                ref={register({ required: true })}
                            />
                            {
                                errors.icon
                                && <span className="error">Icon image is required</span>
                            }
                        </Col>
                    </Row>
                    <Row>

                        <Col>
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
                    </Row>
                </div>
                <Button
                    className="btn-brand btn-send mt-0"
                    type="submit"
                    variant="dark"
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddService;