import React, { useContext } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './PlaceOrder.css';


const PlaceOrder = () => {
    document.title = "Dashboard | Place Order | Creative Agency"

    const { loggedInUser, order } = useContext(UserContext);

    const history = useHistory();

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {

        const { name, email, projectDetails, price } = data;
        const formData = new FormData();

        const totalData = JSON.stringify({
            ...order,
            name,
            email,
            projectDetails,
            price,
            status: 'Pending'
        });

        formData.append('total', totalData)
        formData.append('file', data.projectFile[0]);

        fetch('https://creative-agency2020.herokuapp.com/placeOrder', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert(`Congratulations! You have placed an oreder on ${order.title} successfully.`)
                    history.replace('/')
                }
            })
    }

    // Handle uplaod image/file
    const handleProjectFile = () => {
        document.getElementById('project-file').click();
    }

    return (
        <Row md={6}>
            <Form
                className="order-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Form.Control
                    // disabled
                    name="name"
                    type="text"
                    ref={register({ required: true })}
                    placeholder="Your name / company's name*"
                    defaultValue={loggedInUser ? loggedInUser.name : ''}
                />
                {
                    errors.name
                    && <span className="error">Your name / company name is required</span>
                }
                <Form.Control
                    disabled
                    name="email"
                    type="email"
                    ref={register({ required: true })}
                    placeholder="Your email address*"
                    defaultValue={loggedInUser ? loggedInUser.email : ''}
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
                    defaultValue={order.title}
                />
                {
                    errors.service
                    && <span className="error">Service name is required</span>
                }
                <Form.Control
                    name="projectDetails"
                    type="text"
                    ref={register({ required: true })}
                    placeholder="Project Details*"
                />
                {
                    errors.projectDetails
                    && <span className="error mt-3 mb-0">Project details is required</span>
                }
                <Row style={{ display: 'inline-flex' }}>
                    <Col md={6}>
                        <Form.Control
                            name="price"
                            type="number"
                            style={{ width: '88%' }}
                            ref={register({ required: true })}
                            placeholder="Price*"
                            defaultValue={order.price ? order.price : ''}
                        />
                        {
                            errors.price
                            && <span className="error">Price is required</span>
                        }
                    </Col>
                    <Col md={6}>
                        <Form.Control
                            hidden
                            name="projectFile"
                            type="file"
                            id="project-file"
                            ref={register({ required: true })}
                            placeholder="Upload*"
                        />
                        <Button
                            className="btn-project-upload"
                            onClick={handleProjectFile}
                        >
                            <i className="fas fa-cloud-upload-alt"></i>
                            {' '} Upload project file
                            </Button>
                        {
                            errors.projectFile
                            && <span className="error">Sample picture file is required</span>
                        }
                    </Col>
                </Row>
                <br />
                <Button
                    className="btn-brand send mt-0"
                    type="submit"
                    variant="dark"
                >
                    SEND
                </Button>
            </Form>
        </Row>
    );
};

export default PlaceOrder;