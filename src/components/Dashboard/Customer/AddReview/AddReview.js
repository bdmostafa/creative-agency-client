import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';

const AddReview = () => {
    document.title = "Dashboard | Add Review | Creative Agency"

    const { loggedInUser } = useContext(UserContext);
    
    const history = useHistory();

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {

        const updatedForm = {
            image: loggedInUser.image,
            name: data.name,
            designation: data.designation,
            description: data.description
        };

        fetch('http://https://creative-agency2020.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(updatedForm)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('You have added review successfully.')
                    history.replace('/dashboard/user')
                }
            })
    }

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
                    defaultValue={loggedInUser && loggedInUser.name}
                />
                {
                    errors.name
                    && <span className="error">Your name is required</span>
                }
                <Form.Control
                    name="designation"
                    type="text"
                    ref={register({ required: true })}
                    placeholder="Company's name, designation*"
                />
                {
                    errors.designation
                    && <span className="error">Company's name, designation is required</span>
                }
                <Form.Control
                    maxLength="100"
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