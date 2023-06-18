import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='p-2 mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button className='p-2' variant="outline-primary"><FaGithub /> Login with Github</Button>
            <div className='mt-4'>
                <h3>Find us On</h3>
                <ListGroup>
                    <Button className='p-2 ' variant="outline-primary"><FaFacebook /> Login with Facebook</Button>
                    <Button className='p-2 ' variant="outline-primary"><FaTwitter /> Login with Twitter</Button>
                    <Button className='p-2' variant="outline-primary"><FaInstagram /> Login with Instagram</Button>
                </ListGroup>
            </div>
            <div className='mt-3'>
                <QZone></QZone>
            </div>
            <div className='mt-3 text-center rounded'>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;