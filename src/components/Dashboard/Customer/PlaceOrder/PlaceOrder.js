import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './PlaceOrder.css';


const PlaceOrder = () => {
    const {loggedInUser, order} = useContext(UserContext);
    const history = useHistory();

    // console.log(order)

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => { 
        const {name, email, projectDetails, price} = data;
        console.log(data)
        const formData = new FormData();
        const totalData = JSON.stringify({
            ...order,
            name,
            email,
            projectDetails,
            price
        });

        formData.append('total', totalData)
        formData.append('file', data.projectFile[0]);

        fetch('http://localhost:4200/placeOrder', {
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
// console.log(loggedInUser)
    return (
        <div>
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
                            // disabled
                            name="email"
                            type="email"
                            ref={register({ required: true })}
                            placeholder="Your email address*"
                            defaultValue={ loggedInUser ? loggedInUser.email : '' }
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
                        <Form.Control
                            name="price"
                            type="number"
                            ref={register({ required: true })}
                            placeholder="Price*"
                            defaultValue={order.price ? order.price : ''}
                        />
                        {
                            errors.price
                            && <span className="error">Price is required</span>
                        }
                        <Form.Control
                            name="projectFile"
                            type="file"
                            ref={register({ required: true })}
                            placeholder="Upload*"
                        />
                        {
                            errors.projectFile
                            && <span className="error">Sample picture file is required</span>
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
                    
        </div>
    );
};

export default PlaceOrder;