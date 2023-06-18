import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h3>Terms and Condition</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugiat eum quibusdam accusamus numquam quasi perferendis quod nesciunt, officia repudiandae cum! Qui, nemo similique mollitia impedit voluptatibus nam error temporibus.</p>
            <p><Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;