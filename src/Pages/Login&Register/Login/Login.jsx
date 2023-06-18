import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0';
    // console.log('login page location', location);
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                // console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <Container className='w-25 mx-auto'>
            <h1>Please Login</h1>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />

                <Form.Text className="text-secondary">
                    Don't have an Account ? <Link to='/register'>Register</Link>
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

export default Login;