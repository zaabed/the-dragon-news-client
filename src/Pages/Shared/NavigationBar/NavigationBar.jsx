import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-4'>
                <Container>
                    <Navbar.Brand href="#home"> <i><b>Dragon-News</b></i> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='ms-3' to='/category/0'>Home</Link>
                            <Link className='ms-3' to='/'>About </Link>
                            <Link className='ms-3' to='/'>Career</Link>
                        </Nav>
                        <Nav>
                            {user &&
                                <span><FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                                    {user.email}</span>
                            }


                            {
                                user ?
                                    <Button onClick={handleLogOut} variant="secondary">LogOut</Button> :
                                    <Link to='/login'>
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;