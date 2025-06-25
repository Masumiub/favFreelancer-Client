import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation();

    if (loading) {
        return <p className="text-center my-20"><span className="loading loading-spinner text-primary loading-xl"></span></p>;
    }
    if (user && user?.email) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to='/signin'></Navigate>
    }

};

export default PrivateRoute;