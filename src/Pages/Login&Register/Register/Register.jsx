import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const [accepted, setAccepted] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                form.reset();
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <Container className='w-25 mx-auto'>
            <h1>Please SignUp</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox"
                        label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} />
                </Form.Group>

                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />

                <Form.Text className="text-secondary">
                    Already have an Account ? <Link to='/login'>Login</Link>
                </Form.Text>

                <div>
                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </div>

            </Form>
        </Container>

    );
};

export default Register;