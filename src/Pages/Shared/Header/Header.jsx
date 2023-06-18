import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {

    return (
        <Container className='mt-3'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='mt-3'><small>Journalism Without Fear or Favour</small></p>
                <p><b>{moment().format("dddd, MMMM Do, YYYY")}</b></p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger font-weight-bold' speed={80}>
                    I can be a React component, multiple React components, or just some text.Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;