import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const privateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // console.log(loading)
    const location = useLocation();

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }


    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default privateRoute;